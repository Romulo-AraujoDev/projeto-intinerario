const dadosLivros = [
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        ano: 1899,
        resumo: "Um clássico da literatura brasileira que aborda a história de Bento Santiago e a misteriosa Capitu, mergulhando na dúvida da traição. O livro é narrado por Bento, que, após anos, tenta reviver e interpretar os acontecimentos de sua juventude, especialmente seu casamento com Capitu e a eventual acusação de adultério, o que o leva a questionar se Capitu tinha ou não 'olhos de cigana oblíqua e dissimulada'.", 
        capaUrl: "./capas/domcas.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Dom+Casmurro",
        categoria: "Literatura Clássica" 
    },
    {
        titulo: "O Cortiço",
        autor: "Aluísio Azevedo",
        ano: 1890,
        resumo: "Obra máxima do Naturalismo brasileiro, que descreve a vida, as paixões e a degeneração social em um cortiço no Rio de Janeiro. A história explora a influência do ambiente e da raça sobre os indivíduos, destacando personagens como João Romão e a escrava Bertoleza, em uma crítica contundente à ambição e à miséria.",
        capaUrl: "./capas/corti.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=O+Corti%C3%A7o",
        categoria: "Literatura Clássica" 
    },
    {
        titulo: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        ano: 1881,
        resumo: "Um defunto autor narra sua vida em tom irônico e cético. O livro marca o início do Realismo no Brasil e critica a elite, começando pelo 'capítulo das negativas'. É uma análise profunda e bem-humorada das vaidades humanas e da inutilidade de uma vida burguesa.",
        capaUrl: "./capas/memoriapostumas.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Mem%C3%B3rias+P%C3%B3stumas",
        categoria: "Literatura Clássica" 
    },
    {
        titulo: "Vidas Secas",
        autor: "Graciliano Ramos",
        ano: 1938,
        resumo: "A saga da família de Fabiano, que luta pela sobrevivência contra a seca e a miséria no sertão nordestino. A narrativa é fragmentada e focada na linguagem concisa e na brutalidade da vida. O livro é notável pelo retrato da incomunicabilidade e do instinto animal de sobrevivência dos personagens, incluindo a cachorra Baleia.",
        capaUrl: "./capas/vidassecas.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Vidas+Secas",
        categoria: "Literatura Clássica" 
    },
    {
        titulo: "O Alienista",
        autor: "Machado de Assis",
        ano: 1882,
        resumo: "Uma sátira genial sobre a ciência e a loucura, onde o Dr. Simão Bacamarte tenta classificar a razão humana. O médico isola quase toda a população de Itaguaí em seu hospício, a Casa Verde, levantando a reflexão: quem é realmente o louco, o indivíduo ou a sociedade que o julga?",
        capaUrl: "./capas/alienista.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=O+Alienista",
        categoria: "Literatura Clássica" 
    },
    {
        titulo: "Triste Fim de Policarpo Quaresma",
        autor: "Lima Barreto",
        ano: 1915,
        resumo: "A história de um patriota ingênuo que tenta, repetidamente, reformar o Brasil com ideias utópicas e falha. Policarpo Quaresma, um major sonhador, enfrenta o ceticismo e a corrupção da sociedade, terminando sua jornada em desilusão e tragédia. Uma crítica feroz ao nacionalismo ingênuo e ao poder.",
        capaUrl: "./capas/tristefim.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Triste+Fim+de+Policarpo+Quaresma",
        categoria: "Literatura Clássica" 
    },
    {
        titulo: "Capitães da Areia",
        autor: "Jorge Amado",
        ano: 1937,
        resumo: "A vida de um grupo de menores abandonados ('capitães da areia') que vivem de roubos nas ruas de Salvador. O livro retrata a marginalização, mas também a solidariedade e a humanidade desses jovens liderados por Pedro Bala, mostrando diferentes destinos e a busca por dignidade.",
        capaUrl: "./capas/cptareia.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Capit%C3%A3es+da+Areia",
        categoria: "Literatura Clássica" 
    },
    {
        titulo: "O Menino Maluquinho",
        autor: "Ziraldo",
        ano: 1980,
        resumo: "A história de um menino criativo e travesso que vive a infância com alegria e imaginação, aprendendo sobre amizade, convivência e empatia. Ele usa uma panela na cabeça e está sempre cheio de ideias mirabolantes, celebrando a liberdade e o pensamento fora da caixa.",
        capaUrl: "./capas/meninomlc.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=O+Menino+Maluquinho", // LINK CORRIGIDO
        categoria: "Literatura Clássica" 
    },
    {
        titulo: "A Bolsa Amarela",
        autor: "Lygia Bojunga",
        ano: 1976,
        resumo: "Raquel guarda seus sonhos em uma bolsa mágica e aprende a lidar com frustrações e desejos da infância, refletindo sobre identidade e autoestima. Ela luta para ser reconhecida como pessoa, não como criança, e lida com seus 'três grandes desejos' com muita imaginação.",
        capaUrl: "./capas/bolsay.jpg", 
        linkCompra: "https://www.amazon.com.br/Bolsa-Amarela-Lygia-Bojunga/dp/8589020037/ref=sr_1_5?dib=eyJ2IjoiMSJ9.wgZDx5UbJBBMWYtuxQHAHd9X-YHptEODmivvGUQMGFY2ETQ4pgmdaTj8A1-e_hVgC6RZpGzVXZGMZrzJ2C3Dzxhirqmimaww5Msgnk8mVafYpqgKxr8Mi2E-FCuNxlkkuf-PyC8p-7cvV8Vy7IqiWKQP2XkveFEbeTRCExzWdfUonn7yYC7frdrJdfLTRpYOLJcwW_vrk4nyrrNzwDfOvslNCaWs2z0BHALcNj94LgRM_VkT5Gx7b4VM9H96nLVW-oxXRWXc8m0w5aT18Pk_4CHyTqt4Yp7ylYNnmchgHZo.l8BOHZRzjYrqlMMDKej--nyCTUGORkSdwRMgrVGy82E&dib_tag=se&keywords=A+Bolsa+Amarela&qid=1763324545&sr=8-5", // LINK CORRIGIDO
        categoria: "Literatura Clássica" 
    },
    {
        titulo: "Marcelo, Marmelo, Martelo",
        autor: "Ruth Rocha",
        ano: 1976,
        resumo: "Marcelo é um garoto curioso que cria palavras e questiona o mundo, explorando a linguagem e o valor da criatividade. O livro é uma celebração da infância e do poder da imaginação ao mostrar o garoto tentando renomear as coisas de acordo com a sua própria lógica.",
        capaUrl: "./capas/mmm.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Marcelo%2C+Marmelo%2C+Martelo", // LINK CORRIGIDO
        categoria: "Literatura Clássica" 
    },
    {
        titulo: "Monteiro Lobato o Minotauro",
        autor: "Monteiro Lobato",
        ano: 2019,
        resumo: "O livro da coleção trenzinho, conta algumas histórias curtas, recomendadas para crianças menores, de um dos maiores escritores da literatura infantil monteiro lobato. Os livros contam histórias clássicas e marcantes do escritor, com tia nastácia, narizinho, emília, pedrinho, visconde e entre outros, contando com dez títulos na coleção.",
        capaUrl: "./capas/minotouro.jpg", 
        linkCompra: "https://www.amazon.com.br/Minotauro-01-Monteiro-Lobato/dp/8595201366/ref=asc_df_8595201366?mcid=16377400ae6b3f0cba879f3f06fc5953&tag=googleshopp00-20&linkCode=df0&hvadid=709883381884&hvpos=&hvnetw=g&hvrand=10005049910052929839&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101457&hvtargid=pla-1115208109352&psc=1&language=pt_BR&gad_source=1", // LINK CORRIGIDO
        categoria: "Literatura Clássica" 
    },
    
    {
        titulo: "Pequeno Manual Antirracista",
        autor: "Djamila Ribeiro",
        ano: 2019,
        resumo: "Um guia prático para entender as raízes do racismo estrutural no Brasil e aprender como agir no dia a dia. A obra apresenta 10 lições para desnaturalizar práticas racistas e promover uma sociedade mais justa e igualitária.",
        capaUrl: "./capas/antiracista.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Pequeno+Manual+Antirracista", // LINK CORRIGIDO
        categoria: "Desenvolvimento Social" 
    },
    {
        titulo: "Quarto de Despejo",
        autor: "Carolina Maria de Jesus",
        ano: 1960,
        resumo: "Diário brutalmente honesto de uma catadora de papel que vive na favela, registrando a miséria e a luta diária. O livro expõe a vida na favela do Canindé, a fome, a indignidade e a força de uma mulher que encontrou na escrita seu meio de subsistência e voz.",
        capaUrl: "./capas/quartododespejo.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Quarto+de+Despejo", // LINK CORRIGIDO
        categoria: "Desenvolvimento Social" 
    },
    {
        titulo: "Pedagogia do Oprimido",
        autor: "Paulo Freire",
        ano: 1968,
        resumo: "Obra essencial que questiona a educação 'bancária' e propõe um método dialógico e libertador para a transformação social. Freire defende que a educação deve ser um ato de cognição e não de transferência de informações, capacitando o oprimido a refletir e a atuar no mundo.",
        capaUrl: "./capas/pedagogiadoopm.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Pedagogia+do+Oprimido",
        categoria: "Desenvolvimento Social" 
    },
    {
        titulo: "O que é Lugar de Fala?",
        autor: "Djamila Ribeiro",
        ano: 2017,
        resumo: "Explica a importância da posição social e histórica de onde se fala e como ela afeta a produção de conhecimento. A autora argumenta que o 'lugar' que ocupamos influencia profundamente a autoridade e a perspectiva com que falamos sobre as opressões.",
        capaUrl: "./capas/lugarfala.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=O+que+%C3%A9+Lugar+de+Fala%3F", // LINK CORRIGIDO
        categoria: "Desenvolvimento Social" 
    },
    {
        titulo: "Mulheres, Raça e Classe",
        autor: "Angela Davis",
        ano: 1981,
        resumo: "Analisa a intersecção entre opressão de gênero, raça e classe, focando nas experiências históricas das mulheres negras. Davis desmantela o feminismo branco hegemônico e mostra como a luta pela libertação precisa abordar todas as formas de opressão simultaneamente.",
        capaUrl: "./capas/mulherclasse.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Mulheres%2C+Ra%C3%A7a+e+Classe",
        categoria: "Desenvolvimento Social" 
    },
    {
        titulo: "Sapiens: Uma Breve História da Humanidade",
        autor: "Yuval Noah Harari",
        ano: 2011,
        resumo: "Explora a história humana desde a Idade da Pedra, discutindo como o desenvolvimento social e a cognição nos moldaram. O livro aborda três grandes revoluções — Cognitiva, Agrícola e Científica — e como as narrativas fictícias (crenças, moedas, nações) permitem a cooperação em massa.",
        capaUrl: "./capas/sapiens.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Sapiens",
        categoria: "Desenvolvimento Social" 
    },
    {
        titulo: "O Fio da Meada",
        autor: "Conceição Evaristo",
        ano: 2012,
        resumo: "Contos que exploram a identidade, a memória e as experiências de vida de personagens marginalizados, com forte apelo social. A autora utiliza o conceito de 'escrevivência' para narrar a história de mulheres negras, revelando a beleza e a dor da existência.",
        capaUrl: "./capas/fiomeada.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=O+Fio+da+Meada", // LINK CORRIGIDO
        categoria: "Desenvolvimento Social" 
    },
    {
        titulo: "Menina Bonita do Laço de Fita",
        autor: "Ana Maria Machado",
        ano: 1986,
        resumo: "Um coelhinho branco se encanta por uma coelhinha negra, aprendendo sobre a beleza da diversidade e o respeito às diferenças. É um clássico infantojuvenil que celebra a miscigenação e ensina a aceitação e o valor da beleza individual.",
        capaUrl: "./capas/bonitalaco.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Menina+Bonita+do+La%C3%A7o+de+Fita", // LINK CORRIGIDO
        categoria: "Desenvolvimento Social" 
    },
    {
        titulo: "O Reizinho Mandão",
        autor: "Ruth Rocha",
        ano: 1986,
        resumo: "Um rei autoritário aprende lições de empatia e convivência ao lidar com seus súditos e suas próprias atitudes. O reizinho manda que todos fiquem calados e aprende, da pior forma, que a comunicação e a liberdade de expressão são essenciais para a vida em sociedade.",
        capaUrl: "./capas/reizinho.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=O+Reizinho+Mand%C3%A3o", // LINK CORRIGIDO
        categoria: "Literatura Clássica" // Manteve em Literatura Clássica por ser da Ruth Rocha
    },

    {
        titulo: "Lógica de Programação e Algoritmos com Javascript",
        autor: "Edécio Fernando Iepsen",
        ano: 2022,
        resumo: "Os conteúdos abordados em Lógica de Programação e Algoritmos são fundamentais a todos aqueles que desejam ingressar no universo da Programação de Computadores. Esses conteúdos, no geral, impõem algumas dificuldades aos iniciantes. Neste livro, o autor utiliza sua experiência de mais de 15 anos em lecionar a disciplina de Algoritmos em cursos de graduação, para trabalhar o assunto passo a passo. Cada capítulo foi cuidadosamente planejado a fim de evitar a sobrecarga de informações ao leitor, com exemplos e exercícios de fixação para cada assunto.",
        capaUrl: "./capas/logicaprograma.jpg", 
        linkCompra: "https://www.amazon.com.br/L%C3%B3gica-Programa%C3%A7%C3%A3o-Algoritmos-com-JavaScript/dp/6586057906/ref=asc_df_6586057906?mcid=2532f9198efa376c85957c3317e4835b&tag=googleshopp00-20&linkCode=df0&hvadid=709897990234&hvpos=&hvnetw=g&hvrand=10178909200574797855&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101457&hvtargid=pla-1646193652318&psc=1&language=pt_BR&gad_source=1",
        categoria: "TI e Inclusão Digital" 
    },
    {
        titulo: "Introdução à Linguagem SQL",
        autor: " Thomas Nield",
        ano: 2016,
        resumo: "Atualmente as empresas estão coletando dados a taxas exponenciais e mesmo assim poucas pessoas sabem como acessá-los de maneira relevante. Se você trabalha em uma empresa ou é profissional de TI, este curto guia prático lhe ensinará como obter e transformar dados com o SQL de maneira significativa. ",
        capaUrl: "./capas/sql.jpg", 
        linkCompra: "https://www.amazon.com.br/Introdu%C3%A7%C3%A3o-Linguagem-SQL-Abordagem-Iniciantes/dp/8575225014/ref=asc_df_8575225014?mcid=6fbfccdedc4f3c489a3a4d4a12fa3cc8&tag=googleshopp00-20&linkCode=df0&hvadid=709884550021&hvpos=&hvnetw=g&hvrand=10178909200574797855&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101457&hvtargid=pla-424463399897&psc=1&language=pt_BR&gad_source=1",
        categoria: "TI e Inclusão Digital" 
    },
    {
        titulo: "Fundamentos de Segurança da Informação: com Base na ISO 27001 e na ISO 27002",
        autor: "Jule Hintzbergen",
        ano: 2018,
        resumo: "Todos os conceitos de segurança da informação apresentados nesta versão do livro estão baseados nas normas ISO/IEC 27001:2013 e ISO/IEC 27002:2013. Além disso, o texto também faz referência a outros padrões internacionais de segurança da informação relevantes, quando apropriado. O livro também traz um estudo de caso real ao longo dos seus capítulos para demonstrar como os controles apresentados nas normas são levados da teoria à prática em um ambiente operacional.",
        capaUrl: "./capas/segurancaa.jpg", 
        linkCompra: "https://www.amazon.com.br/Fundamentos-Seguran%C3%A7a-Informa%C3%A7%C3%A3o-27001-27002/dp/8574528609",
        categoria: "TI e Inclusão Digital" 
    },
    {
        titulo: "Algoritmos E Lógica Da Programação",
        autor: "Marcelo Marques Gomes & Marcio Vieira Soares & Ricardo Concilio",
        ano: 2019,
        resumo: "Com linguagem simples e didática - sem, no entanto, fugir da complexidade do assunto -, o livro procura tornar prática a lógica de programação, além de mostrar aos estudantes um caminho mais adequado na construção dos algoritmos. O desenvolvimento do raciocínio lógico e da abstração de procedimentos e dados são as maiores dificuldades para os estudantes dos cursos introdutórios. Nesse sentido, os autores resolvem os problemas propostos passo a passo, apresentando todos os conceitos envolvidos por meio de fluxogramas e em conjunto com pseudocódigos.",
        capaUrl: "./capas/algoritmosLog.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Como+Hackear+Tudo",
        categoria: "TI e Inclusão Digital" 
    },
    {
        titulo: "Algoritmos da Destruição",
        autor: "Cathy O'Neil",
        ano: 2016,
        resumo: "Mostra como modelos matemáticos podem perpetuar e ampliar a desigualdade social no mundo digital. O livro expõe os 'WMDs' (Weapons of Math Destruction), que são algoritmos opacos e injustos usados em áreas como crédito, policiamento e educação, reforçando preconceitos existentes.",
        capaUrl: "./capas/algoritmosdestruicao.jpg", 
        linkCompra: "https://www.amazon.com.br/s?k=Algoritmos+da+Destrui%C3%A7%C3%A3o",
        categoria: "TI e Inclusão Digital" 
    }
];

// Função que abre o modal. Ela busca o livro pelo título na base de dados.
function abrirModalResumo(tituloCodificado) {
    const titulo = decodeURIComponent(tituloCodificado);
    const livro = dadosLivros.find(l => l.titulo === titulo);

    if (!livro) {
        console.error("Livro não encontrado na base de dados:", titulo);
        return;
    }
    
    const modal = document.getElementById('modal-resumo');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalBody = document.getElementById('modal-body');

    modalTitulo.textContent = livro.titulo;
    modalBody.textContent = livro.resumo; 
    
    modal.style.display = 'flex'; 
    document.body.style.overflow = 'hidden'; 
}

// Função que fecha o modal.
function fecharModal() {
    const modal = document.getElementById('modal-resumo');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

// Função que renderiza todos os livros no Catálogo Completo.
function renderizarLivros(livrosParaExibir) {
    const container = document.getElementById('livros-container');
    container.innerHTML = ''; 

    if (livrosParaExibir.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Nenhum livro encontrado com o termo pesquisado.</p>';
        return;
    }

    livrosParaExibir.forEach(livro => {
        const resumoCurto = livro.resumo.length > 120 ? livro.resumo.substring(0, 120) + '...' : livro.resumo;
        
        const encodedTitle = encodeURIComponent(livro.titulo);
        const safeTitleForHTML = `'${encodedTitle}'`;
        
        const cardHTML = `
            <div class="livro-card">
                <img src="${livro.capaUrl}" alt="Capa do livro ${livro.titulo}">
                <h2>${livro.titulo}</h2>
                <p><strong>Autor:</strong> ${livro.autor} (${livro.ano})</p>
                <p>${resumoCurto}</p> 
                
                <button class="btn-resumo-completo" onclick="abrirModalResumo(${safeTitleForHTML})">
                    Ver Resumo Completo
                </button>

                <a href="${livro.linkCompra}" target="_blank" rel="noopener noreferrer">Ver Livro / Comprar</a>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Função para filtrar livros com base no input de busca.
function filtrarLivros() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const livrosFiltrados = dadosLivros.filter(livro => {
        const tituloCorresponde = livro.titulo.toLowerCase().includes(searchTerm);
        const autorCorresponde = livro.autor.toLowerCase().includes(searchTerm);
        const categoriaCorresponde = livro.categoria.toLowerCase().includes(searchTerm);
        return tituloCorresponde || autorCorresponde || categoriaCorresponde;
    });

    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
    
    renderizarLivros(livrosFiltrados);
}

// Função para renderizar as seções de destaque na home.
function renderizarSecoesDestaque() {
    const categorias = [...new Set(dadosLivros.map(livro => livro.categoria))];
    const containerSecoes = document.getElementById('secoes-container');
    
    containerSecoes.querySelector('.sections-flex-wrapper')?.remove(); 

    let allSectionsHTML = '<div class="sections-flex-wrapper">';

    categorias.forEach(categoria => {
        const livrosDaCategoria = dadosLivros.filter(livro => livro.categoria === categoria).slice(0, 3);
        
        if (livrosDaCategoria.length > 0) {
            let livrosHTML = livrosDaCategoria.map(livro => {
                const encodedTitle = encodeURIComponent(livro.titulo);
                const safeTitleForHTML = `'${encodedTitle}'`;
                
                return `
                    <div class="secao-card" onclick="document.getElementById('searchInput').value='${livro.titulo}'; filtrarLivros();">
                        <img src="${livro.capaUrl}" alt="Capa ${livro.titulo}">
                        <h3>${livro.titulo}</h3>
                    </div>
                `;
            }).join('');
            
            const secaoHTML = `
                <section class="category-section flex-item">
                    <h2>${categoria}</h2>
                    <p class="category-description">Explore obras essenciais em ${categoria.toLowerCase()} para o seu desenvolvimento acadêmico e social.</p>
                    <div class="secao-grid">
                        ${livrosHTML}
                    </div>
                    <a href="#catalogo" onclick="document.getElementById('searchInput').value='${categoria}'; filtrarLivros();" class="btn-ver-mais">Ver todos em ${categoria} <i class="fas fa-arrow-right"></i></a>
                </section>
            `;
            allSectionsHTML += secaoHTML;
        }
    });
    
    allSectionsHTML += '</div>';
    
    if (allSectionsHTML.length > '<div class="sections-flex-wrapper"></div>'.length) {
        containerSecoes.innerHTML += allSectionsHTML;
    }
}

// Inicialização do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent) {
        dropdownContent.style.display = 'none';
        
        const dropdownLink = document.querySelector('.dropdown > a');
        if (dropdownLink) {
            dropdownLink.addEventListener('click', (e) => {
                e.preventDefault(); 
                const isVisible = dropdownContent.style.display === 'block';
                dropdownContent.style.display = isVisible ? 'none' : 'block';
            });
        }
    }

    renderizarSecoesDestaque();
    renderizarLivros(dadosLivros);
    
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filtrarLivros();
        }
    });

    const modal = document.getElementById('modal-resumo');
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            fecharModal();
        }
    });
    
    window.abrirModalResumo = abrirModalResumo;
});