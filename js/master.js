// Define la función obtenerLibroAleatorio




document.addEventListener('DOMContentLoaded', ()=>{
    const productList = document.getElementById('product-list');
    const url = './prueba2.json';// atrapamos la ruta y la guardamos en una constante

    // Cargar los datos desde el archivo JSON utilizando fetch

    fetch(url)
        .then(response => response.json())
        .then(data =>{

            data.categorias.forEach(categoria => {
                const productDiv = document.createElement('div');

                productDiv.className = 'categoria'
                // productDiv.classList.add('tarjeta_categoria')
                // / Define la función obtenerLibroAleatorio
               


                productDiv.innerHTML = `
                <img src="${categoria.imagen}" alt="" class="tarj-m">
                <h5 class="centrado">${categoria.categoria}</h5>
                <button data-product="${JSON.stringify(categoria)}">+</button>
                `;
                
                productList.appendChild(productDiv);
                // function obtenerLibroAleatorio(categoria) {
                //     const libros = categoria.libros;
                //     return libros[Math.floor(Math.random() * libros.length)];
                // }
                // const libroAleatorio = obtenerLibroAleatorio(categorias.categoria);
                
            });
            
        })
        // .catch(error =>{
        //     console.error('Error:', error);
        // });
    
    // productList.addEventListener('click', event =)


})