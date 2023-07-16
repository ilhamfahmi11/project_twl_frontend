import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const [nama, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jenis_kelamin, setGender] = useState('Laki-laki');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nama,
        email,
        jenis_kelamin
      });
      navigate('/list');
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      setName(response.data.nama);
      setEmail(response.data.email);
      setGender(response.data.jenis_kelamin);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nama</label>
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
            <label className="label">Jenis_kelamin</label>
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
              <button type="button" className="button is-success" onClick={() => navigate('/list')}>
                Kembali
              </button>
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

export default EditUser;

//mengedit data pengguna, dan saat formulir disubmit, permintaan akan dikirim ke server untuk memperbarui data pengguna.