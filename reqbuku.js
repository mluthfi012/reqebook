class reqbook{
    constructor(Namabuku, Sinopsis) {
        this.Namabuku = Namabuku;
        this.Sinopsis = Sinopsis;
    }
}

// listreqnook

class UI{
    static Reqebook() {
    
        const Datareqebook = penyimpanan.Reqebook();
    //    const Datareqebook=[
    //         {
    //             Namabuku: 'buku dragon',
    //             Sinopsis: 'mengisahkan gitulah'

    //         },
    //         {
    //             Namabuku: 'buku naga',
    //             Sinopsis: 'mengisahkan gitulah'

    //         }
    //    ];
        
    Datareqebook.forEach((ebooks) => UI.addEbookTolist(ebooks));
        
        
    }
        static addEbookTolist(ebooks){
            const list = document.querySelector('#Reqebooklist');

            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${ebooks.Namabuku}</td>
            
            <td>${ebooks.Sinopsis}</td>


            `;
            list.appendChild(row);

        }
}

    //event tambah ebook
    document.querySelector('#Tambahbuku').addEventListener('submit', (e) => {
           e.preventDefault();

           const NamaBuku = document.querySelector('#Namabuku').value;
           const Sipnosis = document.querySelector('#Sinopsis').value;
           const ebook = new reqbook(NamaBuku,Sipnosis);

           UI.addEbookTolist(ebook);

           penyimpanan.addEbookTolist(ebook);
        });


     //local storgage
     
     class penyimpanan{
         static Reqebook(){
             let ebook;
             if(localStorage.getItem('ebooks') === null){
                 ebook = [];
             } else {
                 ebook = JSON.parse(localStorage.getItem('ebooks'));
             }
             return ebook;
         }
         static addEbookTolist(ebook) {
             const ebooks = penyimpanan.Reqebook();
             ebooks.push(ebook);
             localStorage.setItem('ebooks', JSON.stringify(ebooks));
         }
        }
     




//event menamilkan data 
document.addEventListener('DOMContentLoaded', UI.Reqebook);