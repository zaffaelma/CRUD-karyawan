const daftarSiswa = [
    {
        nama: "Rosa",
        jenKel: "Perempuan",
        umur: "17",
        wfavorit: "kuning",
        seragam1: ["osis", "identitas", "wearpack", "olahraga"]
    },
    {
        nama: "Rizki",
        jenKel: "Laki-laki",
        umur: "16",
        wfavorit: "merah",
        seragam: ["osis", "identitas", "wearpack", "olahraga"]
    },
    {
        nama: "Ambar",
        jenKel: "Perempuan",
        umur: "16",
        wfavorit: "ungu",
        seragam: ["osis", "identitas", "wearpack", "olahraga"]
    },
    {
        nama: "Mila",
        jenKel: "Perempuan",
        umur: "18",
        wfavorit: "biru",
        seragam: ["osis", "identitas", "wearpack", "olahraga"]
    },
    {
        nama: "Bagas",
        jenKel: "Laki-laki",
        umur: "15",
        wfavorit: "coklat",
        seragam: ["osis", "identitas", "wearpack", "olahraga"]
    },
]

let mode = 'tambah'
// READ
// arrow function
const tampilkanSiswa = () => {
    // mengakses dom
    const tblSiswa = document.getElementById('tblSiswa')

    tblSiswa.innerHTML = "<tr><th>No</th><th>Nama</th><th>Jenis Kelamin</th><th>Umur</th><th>Warna Favorit</th><th>Edit</th><th>Hapus</th></tr>";
    for(let index in daftarSiswa) {
        console.log(`${parseInt(index)+1}. ${daftarSiswa[index].nama} seorang ${daftarSiswa[index].jenKel} berumur ${daftarSiswa[index].umur} suka warna ${daftarSiswa[index].wfavorit}`);

        // menambah isinya
        tblSiswa.innerHTML += `<tr> <td>${parseInt(index)+1}</td> <td>${daftarSiswa[index].nama}</td><td>${daftarSiswa[index].jenKel}</td><td>${daftarSiswa[index].umur}</td><td>${daftarSiswa[index].wfavorit}</td><td><button class="btn btn-warning" onclick=editSiswa('${daftarSiswa[index].nama}')>Edit</button></td><td><button class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[index].nama}')">Delete</button></td></tr>`
    }
}
tampilkanSiswa()

// CREATE
const tambahSiswa = () => {
    const nama = document.getElementById('txtNama').value
    const jenKel = document.getElementById('jenKel').value
    const umur = document.getElementById('txtUmur').value
    const wfavorit = document.getElementById('warna').value
    const siswaBaru = {
        nama: nama,
        jenKel: jenKel,
        umur: umur,
        wfavorit: wfavorit,
        seragam: ["osis", "identitas", "wearpack", "olahraga"]
    }

    // jika tambah 
    if (mode == 'tambah') {
        daftarSiswa.push(siswaBaru)
    } else {
        // jika edit
        daftarSiswa[mode] = siswaBaru
    }
    document.getElementById('txtNama').value=""
    document.getElementById('jenKel').value=""
    document.getElementById('txtUmur').value=""
    document.getElementById('warna').value=""

    mode = 'tambah'
    tampilkanSiswa()
}

// CARI atau MENENTUKAN
const cariIndex = (nama) => {
    for(let i=0; i < daftarSiswa.length; i++){
        if(daftarSiswa[i].nama === nama){
            return i;
        }
    }
    return -1;
}

// DELETE
const hapusSiswa = (target) => {
    const indexDihapus = cariIndex(target);
    if (indexDihapus !== -1){
        daftarSiswa.splice(indexDihapus, 1);
        tampilkanSiswa()
    }
}

// EDIT
const editSiswa = (target) => {
    const indexEdit = cariIndex(target);
    const siswaDiedit = daftarSiswa[indexEdit];

    document.getElementById('txtNama').value = siswaDiedit.nama;
    document.getElementById('jenKel').value = siswaDiedit.jenKel;
    document.getElementById('txtUmur').value = siswaDiedit.umur;
    document.getElementById('warna').value = siswaDiedit.wfavorit;

    
    // const namaBaru = prompt('Masukkan Nama Baru')
    // const jenkelBaru = prompt('Masukkan Jenis Kelamin Baru')
    // const umurBaru = prompt('Masukkan Umur Baru')
    // const wfavoritBaru = prompt('Masukkan Warna Favorit Baru')

    // const indexEdit = cariIndex(target)
    console.log(target);
    console.log(indexEdit);
    console.log(daftarSiswa[indexEdit]);

    mode = indexEdit;

    // const siswaEdit = daftarSiswa[index]
    
    // document.getElementById('jenKel').value= 
    // document.getElementById('txtUmur').value= 
    // document.getElementById('warna').value= 
    // daftarSiswa[indexEdit]={
    //     nama: namaBaru,
    //     jenKel: jenkelBaru,
    //     umur: umurBaru,
    //     wfavorit: wfavoritBaru,
    // }
}

const cancel = (target) => {
    document.getElementById('txtNama').value=""
    document.getElementById('jenKel').value=""
    document.getElementById('txtUmur').value=""
    document.getElementById('warna').value=""
    mode = 'tambah'
}

