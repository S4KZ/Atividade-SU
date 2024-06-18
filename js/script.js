function Img(){
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewDiv = document.getElementById('image-preview');
            previewDiv.innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
        };
        reader.readAsDataURL(file);
    }
});
}

//pegamdo a varialvel atraves da url

const urlParams = new URLSearchParams(window.location.search);
const choice = urlParams.get('choice');
let resultado = document.getElementById('resultado');

// Check the value of choice
console.log('Choice:', choice);

if (choice === "1") { // Compare with the string "1"
    if (resultado) {
        console.log('Resultado element found:', resultado);
        resultado.outerHTML += `
            <div class="left-name">
                <div class="row">
                    <a href="cadastros.html"><input type="submit" value="voltar" class="form-item-jr"></a>
                    <h3>Equipamentos</h3> 
                </div>
                <hr>
            </div>
            <div class="right">
                <div class="foto">
                    <div id="image-preview"></div>
                </div>
            </div>
            <div class="form-list-row">
                <input class="form-item-bd-lg" type="text" placeholder="campo 1" name="" id="">
                <input class="form-item-bd" type="text" placeholder="campo 2" name="" id="">
            </div>
            <div class="form-list-row">
                <input class="form-item-bd" type="text" placeholder="campo 3" name="" id="">
                <input class="form-item-bd-lg" type="text" placeholder="campo 4" name="" id="">
            </div>
            <div class="form-list-row">
                <input class="form-item-bd" type="text" placeholder="campo 5" name="" id="">
                <input class="form-item-bd" type="date" placeholder="campo 6" name="" id="">
                <input class="form-item-bd" type="date" placeholder="campo 7" name="" id="">
            </div>
            <div class="form-list-row">
                <div class="file-input-container">
                    <button>Selecione o arquivo</button>
                    <input type="file" id="file-input" accept="image/*"  onClick="Img()">
                </div>
                <input type="submit" value="enviar" class="form-item">
            </div>
        `;
    } 
} else if (choice === "2") {
    // Handle choice === "2" case
    console.log('Resultado element found:', resultado);
        resultado.outerHTML += `
        <div class="left-name">
                <div class="row">
                    <a href="cadastros.html"><input type="submit" value="voltar" class="form-item-jr"></a>
                    <h3>Licença</h3> 
                </div>
                <hr>
            </div>

            <div class="form-list-row">
                <input class="form-item-bd-lg" type="text" placeholder="campo 1" name="" id="">
                <input class="form-item-bd" type="text" placeholder="campo 2" name="" id="">
            </div>

        <div class="form-list-row">
                <input class="form-item-bd" type="text" placeholder="campo 5" name="" id="">
                <input class="form-item-bd" type="date" placeholder="campo 6" name="" id="">
            </div>


            <div class="form-list-row">
                <input type="submit" value="enviar" class="form-item">
            </div>

        `;
}else if(choice === "3"){
    resultado.innerHTML += `
      <div class="left-name">
            <div class="row">
                <a href="inicial.html"><input type="submit" value="voltar" class="form-item-jr"></a>
                <h3>Equipamentos</h3> 
            </div>
            <hr>
        </div>

        <div class="scroll">
            <div class="form-list-column">
               
                
            
        <div class="box-lt">
                    <div class="left">
                        <img src="img/pcbom.png" height="140px" width="230px" alt="" srcset="">
                    </div>
                    <div class="form-list-column">
                        <div class="form-list-row">
                            <input class="form-item" type="text" name="" id="" placeholder="RTX 4090 RYZEN 7" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Estado: ativo" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data: 16/06/2024" disabled>
                        </div>
                        <div class="form-list-row">
                            <input class="form-item-jr" type="text" name="" id="" placeholder="cod. 16718" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Licenças: atualizadas" disabled>
                        </div>
                    </div>
                </div>

                <div class="box-lt">
                    <div class="left">
                        <img src="img/sobrador.png" height="140px" width="230px" alt="" srcset="">
                    </div>
                    <div class="form-list-column">
                        <div class="form-list-row">
                            <input class="form-item" type="text" name="" id="" placeholder="Soprador de Ar" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Estado: ativo" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data: 16/06/2024" disabled>
                        </div>
                        <div class="form-list-row">
                            <input class="form-item-jr" type="text" name="" id="" placeholder="cod. 16780" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Licenças: atualizadas" disabled>
                        </div>
                    </div>
                </div> 

                <div class="box-lt">
                    <div class="left">
                        <img src="img/acol.png" height="140px" width="230px" alt="" srcset="">
                    </div>
                    <div class="form-list-column">
                        <div class="form-list-row">
                            <input class="form-item" type="text" name="" id="" placeholder="Álcool Isopropílico" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Estado: ativo" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data: 16/06/2024" disabled>
                        </div>
                        <div class="form-list-row">
                            <input class="form-item-jr" type="text" name="" id="" placeholder="cod. 12380" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Licenças: atualizadas" disabled>
                        </div>
                    </div>
                </div>
                
                <div class="box-lt">
                    <div class="left">
                        <img src="img/setup.jpg" height="140px" width="230px" alt="" srcset="">
                    </div>
                    <div class="form-list-column">
                        <div class="form-list-row">
                            <input class="form-item" type="text" name="" id="" placeholder="notebook " disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Estado: ativo" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data: 16/06/2024" disabled>
                        </div>
                        <div class="form-list-row">
                            <input class="form-item-jr" type="text" name="" id="" placeholder="cod. 56718" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Licenças: atualizadas" disabled>
                        </div>
                    </div>
                </div> 


                <div class="box-lt">
                    <div class="left">
                        <img src="img/luva.png" height="140px" width="230px" alt="" srcset="">
                    </div>
                    <div class="form-list-column">
                        <div class="form-list-row">
                            <input class="form-item" type="text" name="" id="" placeholder="luvas de latex" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Estado: ativo" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data: 16/06/2024" disabled>
                        </div>
                        <div class="form-list-row">
                            <input class="form-item-jr" type="text" name="" id="" placeholder="cod. 16718" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Licenças: atualizadas" disabled>
                        </div>
                    </div>
                </div>

                <div class="box-lt">
                    <div class="left">
                        <img src="img/pincel.png" height="140px" width="230px" alt="" srcset="">
                    </div>
                    <div class="form-list-column">
                        <div class="form-list-row">
                            <input class="form-item" type="text" name="" id="" placeholder="pincel" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Estado: ativo" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data: 16/06/2024" disabled>
                        </div>
                        <div class="form-list-row">
                            <input class="form-item-jr" type="text" name="" id="" placeholder="cod. 16718" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Licenças: atualizadas" disabled>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;

}else if(choice ==="4"){
    
resultado.innerHTML += `
<div class="left-name">
            <div class="row">
                <a href="inicial.html"><input type="submit" value="voltar" class="form-item-jr"></a>
                <h3>Licenças</h3> 
            </div>
            <hr>
        </div>


        <div class="scroll">
            <div class="form-list-column">
                
                <div class="box-lt">
                    <div class="form-list-column">
                        <div class="form-list-row">
                            <input class="form-item" type="text" name="" id="" placeholder="Windows 7" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Estado: ativo" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data: 16/06/2024" disabled>
                        </div>
                        <div class="form-list-row">
                            <input class="form-item-jr" type="text" name="" id="" placeholder="cod. 16718" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data Ven: 16/09/2024" disabled>
                        </div>
                    </div>
                </div>


                     <div class="box-lt">
                    <div class="form-list-column">
                        <div class="form-list-row">
                            <input class="form-item" type="text" name="" id="" placeholder="Windows 10" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Estado: ativo" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data: 16/06/2024" disabled>
                        </div>
                        <div class="form-list-row">
                            <input class="form-item-jr" type="text" name="" id="" placeholder="cod. 16218" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data Ven: 16/09/2024" disabled>
                        </div>
                    </div>
                </div>



                     <div class="box-lt">
                    <div class="form-list-column">
                        <div class="form-list-row">
                            <input class="form-item" type="text" name="" id="" placeholder="Windows 8" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Estado: Desativado" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data: --/--/-----" disabled>
                        </div>
                        <div class="form-list-row">
                            <input class="form-item-jr" type="text" name="" id="" placeholder="cod. 11718" disabled>
                            <input class="form-item" type="text" name="" id="" placeholder="Data Ven: --/--/-----" disabled>
                        </div>
                    </div>
                </div>


            </div>
        </div>
`;

}  else {
    console.error('Resultado element not found');
}




    // Atualiza o conteúdo da div com base na escolha
    //const messageDiv = document.getElementById('message');//pega a div com o id message
    //messageDiv.textContent = choice ? `${choice}` : 'Nenhuma escolha foi feita' //um tipo d innerhtml
    /*messageDiv.textContent = choice ? `Você escolheu: ${choice}` : 'Nenhuma escolha foi feita';
    o choice é uma variavel, que o seu valor foi pego atraves da url.*/
    