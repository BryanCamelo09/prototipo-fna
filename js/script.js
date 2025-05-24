// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Prototipo del FNA cargado. ¡Listos para la interactividad!');

    // Función para actualizar la página de detalle según el servicio
    const updateDetailPage = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const service = urlParams.get('service');

        const serviceTitleElement = document.getElementById('service-title');
        const serviceImageElement = document.getElementById('service-image');
        const serviceDescShortElement = document.getElementById('service-description-short');
        const serviceDescLongElement = document.getElementById('service-description-long');
        const serviceBenefitsElement = document.getElementById('service-benefits');

        if (serviceTitleElement && serviceImageElement && serviceDescShortElement && serviceDescLongElement && serviceBenefitsElement) {
            let title = 'Detalle del Servicio';
            let imageUrl = './img/placeholder_detail.png';
            let descShort = 'Aquí encontrarás una descripción breve del servicio que te interesa.';
            let descLong = 'El Fondo Nacional del Ahorro se compromete a brindarte soluciones financieras claras y accesibles. Nuestros servicios están diseñados para acompañarte en cada etapa de tu vida, desde el ahorro para tus metas hasta la adquisición de vivienda propia, pasando por la gestión eficiente de tus cesantías. Explora en detalle cada opción y descubre los beneficios que tenemos para ti.';
            let benefitsHtml = `
                <li><i class="bi bi-check-circle-fill text-success me-2"></i> Asesoría personalizada.</li>
                <li><i class="bi bi-check-circle-fill text-success me-2"></i> Trámites ágiles y seguros.</li>
                <li><i class="bi bi-check-circle-fill text-success me-2"></i> Tasas competitivas.</li>
            `;

            switch (service) {
                case 'ahorro':
                    title = 'Ahorro Programado';
                    imageUrl = './img/img_ahorro.png'; // Asegúrate de tener esta imagen
                    descShort = 'Un plan de ahorro flexible y seguro para tus objetivos a corto y largo plazo.';
                    descLong = 'Con nuestro Ahorro Programado, puedes establecer metas financieras y trabajar hacia ellas con el respaldo del FNA. Ofrecemos diferentes modalidades que se adaptan a tus ingresos y necesidades, permitiéndote construir un capital sólido para tu futuro.';
                    benefitsHtml = `
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Planes flexibles.</li>
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Rentabilidad garantizada.</li>
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Acceso a créditos de vivienda.</li>
                    `;
                    break;
                case 'cesantias':
                    title = 'Gestión de Cesantías';
                    imageUrl = './img/img_cesantias.png'; // Asegúrate de tener esta imagen
                    descShort = 'Administra y rentabiliza tus cesantías con el FNA, con la mayor seguridad.';
                    descLong = 'Tus cesantías son un respaldo importante para tu futuro. En el FNA, te ayudamos a gestionarlas eficientemente, permitiéndote utilizarlas para vivienda, educación o en caso de desempleo, siempre bajo las mejores condiciones.';
                    benefitsHtml = `
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Rentabilidad competitiva.</li>
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Facilidad en retiros.</li>
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Opciones de inversión.</li>
                    `;
                    break;
                case 'vivienda':
                    title = 'Créditos para Vivienda';
                    imageUrl = './img/img_vivienda.png'; // Asegúrate de tener esta imagen
                    descShort = 'Haz realidad el sueño de tener vivienda propia con nuestras soluciones de financiación.';
                    descLong = 'El FNA te ofrece diversas líneas de crédito de vivienda para que adquieras tu casa o apartamento nuevo o usado, construyas en lote propio o mejores tu vivienda actual. Contamos con tasas y plazos que se ajustan a tu capacidad de pago.';
                    benefitsHtml = `
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Bajas tasas de interés.</li>
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Plazos extendidos.</li>
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Asesoría integral.</li>
                    `;
                    break;
            }

            serviceTitleElement.textContent = title;
            serviceImageElement.src = imageUrl;
            serviceDescShortElement.textContent = descShort;
            serviceDescLongElement.textContent = descLong;
            serviceBenefitsElement.innerHTML = benefitsHtml;
        }
    };

    // Llama a la función si estamos en la página de detalle
    if (window.location.pathname.includes('detail.html')) {
        updateDetailPage();
    }

    // Añadir efectos de feedback visual para botones y enlaces si es necesario (Bootstrap ya hace mucho)
    // Puedes añadir animaciones más complejas aquí si lo deseas
    // Por ejemplo, un simple log para ver si los botones funcionan:
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(`Botón clickeado: ${button.textContent.trim()}`);
        });
    });

    // Añadir iconos de Bootstrap (requiere que el CSS de Bootstrap Icons esté enlazado en el HTML)
    // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    // Si no quieres descargar el CSS de iconos, puedes usar solo texto o imágenes.
});