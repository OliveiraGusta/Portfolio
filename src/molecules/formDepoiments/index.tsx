import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function FormDepoiments() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);
    const [sentEmail, setSentEmail] = useState(false);

    function sendEmail(e: any) {
        e.preventDefault();

        if (name === '' || message === '' || agree == false) {
            alert("Por favor, preencha todos os campos e aceite os termos de uso");
            return;
        }

        const templateParams = {
            from_name: name,
            name: name,
            company: company,
            message: message,
        }

       emailjs.send("service_esbbmjy", "template_xf7imyj", templateParams, "rij6ynPB069F-T3vC")
            .then((response) => {
                console.log("Email enviado com sucesso!", response.status, response.text);
                setName("");
                setCompany("");
                setMessage("");
                setAgree(false);
                setSentEmail(true);
            }), (err: any) => {
                console.error("Erro ao enviar email!", err);
            }
    }

    function otherEmail(){
        setSentEmail(false);
    }

   
    return (
        <div className="max-w-md mx-auto p-6 shadow-md rounded-lg">
            {sentEmail ? (
                <div className="flex flex-col items-center text-center py-6 gap-5">
                    <h2 className="text-white mt-4">Depoimento enviado com sucesso!</h2>
                    <p className="text-white">Em breve, você receberá um email de confirmação.</p>
                    <button
                        type="submit" onClick={otherEmail}
                        className="rounded-3xl border  border-white text-center inline-flex gap-2 px-12 py-3 text-white hover:bg-white hover:text-black transition duration-300"
                    >
                        <img
                            src="src/assets/icons/CheckIcon.svg"
                            alt=""
                            className="w-5 h-5"
                        />
                        Enviar outro depoimento
                    </button>
                </div>
            ) : (
                <form className="space-y-4 flex flex-col items-center" onSubmit={sendEmail}>
                    <input
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="text"
                        placeholder="Seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="text"
                        placeholder="Sua empresa (Opcional)"
                        onChange={(e) => setCompany(e.target.value)}
                        value={company}
                    />

                    <textarea
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
                        placeholder="Sua mensagem"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        rows={4}
                    />

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="agree"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                            className="w-5 h-5  border-gray-300 rounded focus:ring-gray-500"
                        />
                        <label htmlFor="agree" className="text-wh text-sm">
                            Li e concordo com os Termos de Uso e Políticas de Privacidade
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="rounded-3xl border  border-white text-center inline-flex gap-2 px-12 py-3 text-white hover:bg-white hover:text-black transition duration-300"
                    >
                        <img
                            src="src/assets/icons/CheckIcon.svg"
                            alt=""
                            className="w-5 h-5"
                        />
                        Enviar
                    </button>

                </form>
            )}


        </div>
    );
}

export default FormDepoiments;
