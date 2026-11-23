(function () {
  const C = CONFIG;
  const $ = (s) => document.querySelector(s);
  const money = (n) => "$ " + Math.round(n).toLocaleString("es-AR");
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const wspUrl = (texto) => "https://wa.me/" + C.contacto.whatsapp + "?text=" + encodeURIComponent(texto);

  // ---------- Textos generales ----------
  $("#heroKicker").textContent = C.negocio.rubro + " · " + C.sucursales.map((s) => s.nombre).join(" y ");
  $("#heroLead").textContent = C.negocio.eslogan;
  $("#heroWsp").href = wspUrl(C.contacto.mensajeWhatsapp);
  $("#wspFloat").href = wspUrl(C.contacto.mensajeWhatsapp);
  $("#igLink").href = C.contacto.instagram;
  $("#footIG").href = C.contacto.instagram;
  $("#footIG").textContent = C.contacto.instagramUsuario;
  $("#igTexto").textContent = C.contacto.instagramUsuario + " · " + C.negocio.seguidoresIG + " seguidores. Mirá las novedades y los nuevos sabores.";
  $("#anio").textContent = new Date().getFullYear();
  $("#notaPedidos").textContent = "Retiro: " + C.pedidos.entrega + ". Los encargos se piden con " + C.pedidos.anticipacion + " de anticipación.";
  $("#avisoAnticipacion").textContent = "Los encargos se piden con " + C.pedidos.anticipacion + " de anticipación. Te confirmamos por WhatsApp.";

  // ---------- Horarios / abierto ahora ----------
  function ahoraAR() {
    const p = new Intl.DateTimeFormat("en-US", { timeZone: "America/Argentina/Buenos_Aires", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
    const g = (t) => p.find((x) => x.type === t).value;
    const dia = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(g("weekday"));
    return { dia, min: +g("hour") * 60 + +g("minute") };
  }
  const aMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  function abierto(suc) {
    const { dia, min } = ahoraAR();
    return (suc.horarios[dia] || []).some(([a, c]) => min >= aMin(a) && min < aMin(c));
  }
  const hoyAbierto = C.sucursales.filter(abierto).map((s) => s.nombre);
  $("#heroMeta").textContent = hoyAbierto.length ? "Abierto ahora en " + hoyAbierto.join(" y ") : "Ahora estamos cerrados, pero podés dejar tu pedido armado.";

  // ---------- Locales ----------
  $("#locales-lista").innerHTML = C.sucursales.map((s) => {
    const q = encodeURIComponent(s.mapsQuery);
    const on = abierto(s);
    return `<article class="local">
      <iframe loading="lazy" title="Mapa de ${esc(s.nombre)}" src="https://www.google.com/maps?q=${q}&output=embed" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="local-b">
        <h3>${esc(s.nombre)}</h3>
        <span class="estado ${on ? "on" : "off"}">${on ? "Abierto ahora" : "Cerrado ahora"}</span>
        <p>${esc(s.direccion)}</p>
        <p>${esc(s.textoHorarios)}</p>
        <a class="btn btn-main" href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">Cómo llegar a ${esc(s.nombre)}</a>
      </div></article>`;
  }).join("");

  // ---------- Catálogo ----------
  const tarjeta = (p) => `<article class="card">
      <img src="${p.foto}" alt="${esc(p.nombre)}" width="208" height="207" loading="lazy">
      <div class="card-b">
        <h3>${esc(p.nombre)}</h3>
        ${p.descripcion ? `<p>${esc(p.descripcion)}</p>` : ""}
        ${p.porciones ? `<p class="porc">${esc(p.porciones)}</p>` : ""}
        ${p.sabores ? `<details><summary>Ver sabores</summary><ul>${p.sabores.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></details>` : ""}
        <div class="card-f"><span class="precio">${money(p.precio)}</span><button class="add" type="button" data-id="${p.id}" aria-label="Agregar ${esc(p.nombre)} al pedido">Agregar</button></div>
      </div></article>`;

  $("#railDestacados").innerHTML = C.productos.filter((p) => p.destacado).map(tarjeta).join("");

  const cats = ["Todo", ...C.categorias];
  let catActual = "Todo";
  $("#chips").innerHTML = cats.map((c) => `<button class="chip" role="tab" type="button" data-cat="${esc(c)}" aria-selected="${c === "Todo"}">${esc(c)}</button>`).join("");
  function pintarGrilla() {
    const lista = C.productos.filter((p) => catActual === "Todo" || p.categoria === catActual);
    $("#grid").innerHTML = lista.map(tarjeta).join("");
  }
  $("#chips").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    catActual = b.dataset.cat;
    document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-selected", c === b));
    pintarGrilla();
  });
  pintarGrilla();

  // ---------- Carrito ----------
  const KEY = "antojos-carrito-v1";
  let carrito = {};
  try { carrito = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
  for (const id of Object.keys(carrito)) if (!C.productos.some((p) => p.id === id)) delete carrito[id];
  const guardar = () => { try { localStorage.setItem(KEY, JSON.stringify(carrito)); } catch (e) {} };
  const prod = (id) => C.productos.find((p) => p.id === id);
  const total = () => Object.entries(carrito).reduce((t, [id, q]) => t + prod(id).precio * q, 0);
  const cantidad = () => Object.values(carrito).reduce((a, b) => a + b, 0);

  const dlg = $("#carrito");
  function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("show"), 1800); }

  function pintarCarrito() {
    const n = cantidad();
    const b = $("#cantCarrito"); b.textContent = n; b.hidden = n === 0;
    $("#carritoVacio").hidden = n > 0;
    $("#checkout").hidden = n === 0;
    $("#carritoLista").innerHTML = Object.entries(carrito).map(([id, q]) => {
      const p = prod(id);
      return `<li class="c-item"><strong>${esc(p.nombre)}</strong>
        <div class="qty"><button type="button" data-menos="${id}" aria-label="Quitar uno">−</button><span aria-live="polite">${q}</span><button type="button" data-mas="${id}" aria-label="Agregar uno">+</button></div>
        <span class="c-sub">${money(p.precio)} c/u · ${money(p.precio * q)}</span></li>`;
    }).join("");
    $("#total").textContent = money(total());
  }
  function cambiar(id, d) {
    carrito[id] = (carrito[id] || 0) + d;
    if (carrito[id] <= 0) delete carrito[id];
    guardar(); pintarCarrito();
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest(".add");
    if (a) { cambiar(a.dataset.id, 1); toast("Agregado: " + prod(a.dataset.id).nombre); return; }
    const m = e.target.closest("[data-mas]"); if (m) return cambiar(m.dataset.mas, 1);
    const l = e.target.closest("[data-menos]"); if (l) return cambiar(l.dataset.menos, -1);
  });
  $("#abrirCarrito").addEventListener("click", () => dlg.showModal());
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

  $("#selSucursal").innerHTML = C.sucursales.map((s) => `<option>${esc(s.nombre)}</option>`).join("");
  $("#selPago").innerHTML = C.pedidos.formasDePago.map((f) => `<option>${esc(f)}</option>`).join("");
  const hoy = new Date(); hoy.setMinutes(hoy.getMinutes() - hoy.getTimezoneOffset());
  $("#inpFecha").min = hoy.toISOString().slice(0, 10);

  $("#checkout").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const [y, m, d] = f.get("fecha").split("-");
    const lineas = Object.entries(carrito).map(([id, q]) => `• ${q}x ${prod(id).nombre} — ${money(prod(id).precio * q)}`);
    let msg = "¡Hola! Quiero hacer este pedido:\n" + lineas.join("\n") + "\nTotal: " + money(total()) +
      "\nRetiro en: " + f.get("sucursal") + "\nFecha: " + `${d}/${m}/${y}` + "\nPago: " + f.get("pago") + "\nNombre: " + f.get("nombre");
    const nota = (f.get("nota") || "").trim();
    if (nota) msg += "\nAclaraciones: " + nota;
    window.open(wspUrl(msg), "_blank", "noopener");
  });

  pintarCarrito();
})();
