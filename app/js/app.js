const apiData = document.querySelector('.api-data ')

async function listarCursos() {
    const url = "http://localhost:3000/cursos"

    const response = await axios.get(url)

    const List = Array.from(response.data)
    List.forEach(async function (curso) {
        apiData.innerHTML += `
            <div class=" m-1" style="width:600px">
              
                <section class="card-body">
                    <h5 class="card-title">${curso.Id}</h5>
                    <p>
                         ${curso.nomeCurso}
                    </p>
                    <hr>
                    <p>
                         ${curso.nivelEnsino}
                    </p>
                    <hr>
                    <p>
                         ${curso.duracao}
                    </p>
                    <hr>
                    <p>

                         ${curso.municipio}
                    </p>
                    
                </section>
            </div>
        `
    })
}
listarCursos()









