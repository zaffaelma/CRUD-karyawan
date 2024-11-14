const daftarKaryawan = [
    {
    nama: "Devyn Ramirez",
    masaKerja: "10",
    nomorInduk: "0123456789",
    gaji: "7.000.000"
    },
    {
        nama: "Harmony Duncan",
        masaKerja: "5",
        nomorInduk: "1234567890",
        gaji: "4.000.000"
    },
    {
        nama: "Clarissa Burgess",
        masaKerja: "8",
        nomorInduk: "2345678901",
        gaji: "7.000.000"
    },
    {
        nama: "Reilly Blanchard",
        masaKerja: "7",
        nomorInduk: "3456789012",
        gaji: "7.000.000"
    },
    {
        nama: "Zion Brooks",
        masaKerja: "4",
        nomorInduk: "4567890123",
        gaji: "4.000.000"
    },
    {
        nama: "Jovanny Mays",
        masaKerja: "10",
        nomorInduk: "5678901234",
        gaji: "7.000.000"
    },
    {
        nama: "Cindy Chase",
        masaKerja: "9",
        nomorInduk: "6789012345",
        gaji: "7.000.000"
    },
    {
        nama: "Kristin Mcdaniel",
        masaKerja: "8",
        nomorInduk: "7890123456",
        gaji: "7.000.000"
    },
    {
        nama: "Macey Sanford",
        masaKerja: "7",
        nomorInduk: "8901234567",
        gaji: "7.000.000"
    },
    {
        nama: "Alfredo Faulkner",
        masaKerja: "10",
        nomorInduk: "9012345678",
        gaji: "7.000.000"
    },
]

let mode = 'tambah'
let indexEdit = -1;
// READ
const tampilkanKaryawan = () => {
    const tblKaryawan = document.getElementById('tblKaryawan')
    tblKaryawan.innerHTML = "<tr> <th>No</th> <th>Nama</th> <th>NIK</th> <th>Masa Kerja</th> <th>Gaji</th> <th>Edit</th> <th>Hapus</th> </tr>"

    daftarKaryawan.forEach((karyawan, index) => {
        const row = tblKaryawan.insertRow();
        row.innerHTML = `<tr> <th>${index+1}</th> <th>${karyawan.nama}</th> <th>${karyawan.nomorInduk}</th> <th>${karyawan.masaKerja}</th> <th>${karyawan.gaji}</th> <td><button class="btn btn-warning" onclick=editKaryawan('${karyawan.nomorInduk}')>Edit<buton/></td><td><button class="btn btn-danger" onclick="hapusKaryawan('${karyawan.nomorInduk}')">Hapus</button></td></tr>`
    })
}

// CREATE
const tambahKaryawan = () => {
    const nama = document.getElementById('nama')
    const masaKerja = document.getElementById('masaKerja')
    const nomorInduk = document.getElementById('nomorInduk')
    const gaji = document.getElementById('gaji')

    const karyawanBaru = {
        nama: nama,
        masaKerja: masaKerja,
        nomorInduk: nomorInduk,
        gaji: gaji,
    }

    // jika tambah 
    if (mode == 'tambah') {
        daftarKaryawan.push(karyawanBaru)
    } else {
        // jika edit
        daftarKaryawan[mode] = karyawanBaru
    }

    resetForm();
    daftarKaryawan.push(karyawanBaru)
}

// CARI atau MENENTUKAN
const cariKaryawan = (nomorInduk) => {
    return daftarKaryawan.findIndex(karyawan => karyawan.nomorInduk === nomorInduk)
}

// DELETE
const hapusKaryawan = (nomorInduk) => {
    const index = cariKaryawan(nomorInduk);
    if (index !== -1){
        daftarKaryawan.splice(index, 1)
        tampilkanKaryawan()
    }    
}

// UPDATE
const editKaryawan = (nomorInduk) => {
    indexEdit = cariKaryawan(nomorInduk)
    const karyawanDiedit = daftarKaryawan[indexEdit];

    document.getElementById('nama').value = karyawanDiedit.nama;
    document.getElementById('masaKerja').value = karyawanDiedit.masaKerja;
    document.getElementById('nomorInduk').value = karyawanDiedit.nomorInduk;
    mode = 'edit';
};

const cancel = (nomorInduk) => {
    resetForm;
}

function listGaji() {
    const masaKerja = document.getElementById('masaKerja').value;
    const gaji = jmlGaji(masaKerja);
    document.getElementById('gaji').value = gaji;
}

const jmlGaji = (masaKerja) => {
    if (masaKerja > 5){
        return 'Rp7.000.000';
    } else {
        return 'Rp4.000.000';
    }
};

const masaKerjaInput = document.getElementById('masaKerja').value;
const gaji = jmlGaji(masaKerjaInput);
document.getElementById('gaji').innerText = gaji;

window.onload = tampilkanKaryawan;