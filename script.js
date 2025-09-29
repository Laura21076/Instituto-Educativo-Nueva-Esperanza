document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Sombra Dinámica para la Barra de Navegación (Navbar)
    const nav = document.getElementById('main-nav');
    
    // Función para añadir/quitar la clase de sombra basada en el scroll
    function updateNavbarShadow() {
        if (window.scrollY > 50) {
            // Añade una sombra fuerte al hacer scroll
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    }

    // Ejecutar la función al cargar y en cada evento de scroll
    window.addEventListener('scroll', updateNavbarShadow);
    updateNavbarShadow(); 

    // 2. Activación del Scrollspy de Bootstrap
    // Esto asegura que el enlace en el menú se resalte al hacer scroll a la sección
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#main-nav',
        offset: 56 // Debe coincidir con el padding-top del body
    });

    
    // 3. Cerrar el Dropdown después de hacer clic en un enlace (Mejora UX en móvil)
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const dropdown = item.closest('.dropdown');
            if (dropdown) {
                const bsDropdown = bootstrap.Dropdown.getInstance(dropdown.querySelector('.dropdown-toggle'));
                if (bsDropdown) {
                    bsDropdown.hide();
                    // Cierra el menú colapsable en móvil si está abierto
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('#navbarNav');
                    if (navbarToggler && navbarCollapse.classList.contains('show')) {
                        navbarToggler.click(); 
                    }
                }
            }
        });
    });

    // 4. FUNCIONALIDAD DEL MODAL DE IMAGENES (CAMPUS)
    const imagenModal = document.getElementById('imagenModal');
    if (imagenModal) {
        imagenModal.addEventListener('show.bs.modal', event => {
            // Botón (imagen) que activó el modal
            const button = event.relatedTarget
            
            // Extraer información de los atributos 'data-'
            const imageUrl = button.getAttribute('data-image-url')
            const imageTitle = button.getAttribute('data-image-title')
            
            // Actualizar el contenido del modal
            const modalImage = imagenModal.querySelector('#modalImage')
            const modalTitle = imagenModal.querySelector('#imagenModalLabel')
            
            modalImage.src = imageUrl
            modalTitle.textContent = imageTitle
        })
    }
});