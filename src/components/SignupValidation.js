function Validation(values) {
    let error = {}
    const email_pattern = /^[^s@]+@[^s@]+\.[^s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === ""){
        error.name = "Nama Tidak boleh kosong"
    }
    else {
        error.name = ""
    }

    if(values.email === ""){
        error.email = "Email Tidak boleh kosong"
    }
    else if(!email_pattern.test(values.email)) {
        error.mail = "Email Tidak Cocok"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = " Password Tidak Boleh Kosong"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password Tidak Cocok"
    }else {
        error.password = ""
    }
    return error;
}

export default Validation;

//Pesan kesalahan akan ditampilkan jika ada kesalahan validasi dalam input pengguna.