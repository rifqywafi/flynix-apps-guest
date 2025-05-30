import { useState } from "react";
import {
  TextField,
  Dropdown,
  TextArea,
  Validation,
  Button,
} from "../components/Form";
import { ContainerCol } from "../components/Container";
import Header from "../components/Header";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (name.length > 1 && email && reason && message) {
      // Submit logic here (e.g., kirim ke server)
      console.log({ name, email, reason, message });

      // Opsional: Reset form
      setName("");
      setEmail("");
      setReason("");
      setMessage("");
      setSubmitted(false);
    }
  };

  return (
    <ContainerCol>
      <Header title="Hubungi Kami" />
      <form onSubmit={handleSubmit} className="mb-15">
        <div className="flex xl:flex-row gap-20">
          <div className="flex xl:flex-col w-full">
            {/* Nama */}
            <div>
              <TextField
                inputId="name"
                inputName="name"
                inputLabel="Nama Lengkap"
                inputType="text"
                placeholder="Masukkan nama lengkap Anda"
                value={name}
                onChangeEvent={(e) => setName(e.target.value)}
              />
              {submitted && (
                <>
                  {!name && (
                    <Validation type="error">Nama harus diisi!</Validation>
                  )}
                  {name && name.length < 2 && (
                    <Validation type="error">
                      Nama harus lebih dari 1 huruf!
                    </Validation>
                  )}
                </>
              )}
            </div>

            {/* Email */}
            <div>
              <TextField
                inputId="email"
                inputName="email"
                inputLabel="Alamat Email"
                inputType="email"
                placeholder="Masukkan alamat email Anda"
                value={email}
                onChangeEvent={(e) => setEmail(e.target.value)}
              />
              {submitted && email.length === 0 && (
                <Validation type="error">Email harus diisi!</Validation>
              )}
            </div>

            {/* Alasan */}
            <div>
              <Dropdown
                inputId="reason"
                inputName="reason"
                inputLabel="Alasan"
                placeholder="Alasan Anda menghubungi kami"
                option={["Kerja Sama", "Komplain", "Konsultasi", "Lainnya"]}
                value={reason}
                onChangeEvent={(e) => setReason(e.target.value)}
              />
              {submitted && reason.length === 0 && (
                <Validation type="error">Pilih alasan Anda!</Validation>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div>
              <TextArea
                inputId="message"
                inputName="message"
                inputLabel="Pesan"
                rows={4}
                placeholder="Tuliskan pesan Anda"
                value={message}
                onChangeEvent={(e) => setMessage(e.target.value)}
              />
              {submitted && message.length === 0 && (
                <Validation type="error">Pesan tidak boleh kosong!</Validation>
              )}
            </div>
            {/* Tombol Submit */}
            <div className="pt-2 flex justify-end">
              <Button color="blue" type="submit" label="Kirim Pesan" />
            </div>
          </div>
        </div>
      </form>
    </ContainerCol>
  );
}
