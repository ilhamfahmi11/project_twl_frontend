import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [nama, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jenis_kelamin, setGender] = useState('Laki-laki');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        nama,
        email,
        jenis_kelamin
      });
      navigate('/list');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">jenis_kelamin</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={jenis_kelamin}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <Link to="/list" type="button" className="button is-success">
                Kembali
              </Link>
            </div>
            <div className="control is-flex-grow-1">
              <button type="submit" className="button is-success is-pulled-right">
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

//membuat data pengguna baru, dan saat formulir disubmit, permintaan akan dikirim ke server untuk menambahkan pengguna baru.