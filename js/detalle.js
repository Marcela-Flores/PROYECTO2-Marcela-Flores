document.addEventListener('DOMContentLoaded',() =>{
    const librosCategoriaElement = document.getElementById('libros-categoria');

    // Recuperar el objeto  de libro almacenado en el LocalStorage
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    console.log(selectedProduct);

    if (selectedProduct && selectedProduct.categoria) {
        const categorias = categoriaSeleccionada.categoria;

        // Recorre las categorias y muestra los libros de cada categoría
        categorias.forEach(categoria => {
            const categoriaDiv = document.createElement('div');
            categoriaDiv.className = 'categoria';

            // Pintando el div
            categoriaDiv.innerHTML = `
            <img src="${categoria.imagen}" alt="${categoria.categoria}">
            <h1>${categoria.categoria}</h1>
            <p>${categoria.descripcion}</p>
            <p>${categoria.detalle}</p>
            <p>Precio: $${categoria.precio}</p>
            <p>Puntuación: ${categoria.puntuacion}</p>
         
            `;
            
        });

    }
});
function volver() {
    // Volver al listado de libros
    window.location.href = 'index.html'
    
}