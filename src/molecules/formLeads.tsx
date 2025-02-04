import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function FormLeads() {
    const ServiceID = "service_esbbmjy"
    const TemplateID = "template_jowwaru"
    const PublicKey = "rij6ynPB069F-T3vC"


    const [fromName, setFromName] = useState("");
    const [nameProject, setNameProject] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [company, setCompany] = useState("");
    const [budget, setBudget] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);
    const [sentEmail, setSentEmail] = useState(false);


    function sendEmail(e: React.FormEvent) {
        e.preventDefault();

        if (fromName === "" || email === "" || phoneNumber === "" || message === "" || !agree) {
            alert("Por favor, preencha todos os campos obrigatórios e aceite os termos de uso.");
            return;
        }


        const templateParams = {
            from_name: fromName,
            name_project: nameProject,
            email: email,
            phone_number: phoneNumber,
            company: company,
            budget: budget,
            message: message,
        };

        emailjs
            .send(ServiceID, TemplateID, templateParams, PublicKey)
            .then((response) => {
                console.log("Email enviado com sucesso!", response.status, response.text);
                setFromName("");
                setNameProject("");
                setEmail("");
                setPhoneNumber("");
                setCompany("");
                setBudget("");
                setMessage("");
                setAgree(false);
                setSentEmail(true);
            })
            .catch((err) => {
                console.error("Erro ao enviar email!", err);
            });
    }

    function resetForm() {
        setSentEmail(false);
    }

    return (
        <div id="orcamento" className="max-w-md mx-auto p-6 rounded-2xl">
            <h2 className="font-bold text-center text-xl mb-10">SOLICITAR ORÇAMENTO</h2>

            {sentEmail ? (
                <div className="flex flex-col items-center text-center py-6 gap-5">
                    <h2 className="text-white mt-4">Orçamento enviado com sucesso!</h2>
                    <p className="text-white">Em breve, entraremos em contato com você.</p>
                    <button
                        type="button"
                        onClick={resetForm}
                        className="rounded-3xl border border-white text-center inline-flex gap-2 px-12 py-3 text-white hover:bg-white hover:text-black transition duration-300"
                    >
                                    Solicitar outro orçamento
                    </button>
                </div>
            ) : (
                <form className="space-y-4 flex flex-col items-center" onSubmit={sendEmail}>
                    <div className="flex gap-3">
                        <input
                            className="w-full p-3 rounded-2xl bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            type="text"
                            placeholder="Seu nome"
                            onChange={(e) => setFromName(e.target.value)}
                            value={fromName}
                            required
                        />

                        <input
                            className="w-full p-3 rounded-2xl bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            type="email"
                            placeholder="Seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="flex gap-3">

                        <input
                            className="w-full p-3 rounded-2xl bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            type="tel"
                            placeholder="Seu telefone"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            required
                        />

                        <input
                            className="w-full p-3 rounded-2xl bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            type="text"
                            placeholder="Sua empresa (Opcional)"
                            onChange={(e) => setCompany(e.target.value)}
                            value={company}
                        />
                    </div>
                    <input
                        className="w-full p-3 rounded-2xl bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="text"
                        placeholder="Nome do projeto"
                        onChange={(e) => setNameProject(e.target.value)}
                        value={nameProject}
                        required
                    />

                    <input
                        className="w-full p-3 rounded-2xl bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="text"
                        placeholder="Orçamento estimado (R$)"
                        onChange={(e) => setBudget(e.target.value)}
                        value={budget}
                    />

                    <textarea
                        className="w-full p-3 rounded-2xl bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
                        placeholder="Explique melhor sua ideia"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        rows={4}
                        required
                    />

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="agree"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                            className="w-5 h-5 border-gray-300 rounded focus:ring-gray-500"
                        />
                        <label htmlFor="agree" className="text-wh text-sm">
                            Li e concordo com os Termos de Uso e Políticas de Privacidade
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="rounded-3xl border border-white text-center inline-flex gap-2 px-12 py-3 text-white hover:bg-white hover:text-black transition duration-300"
                    >
                        Enviar
                    </button>
                </form>
            )}
        </div>
    );
}

export default FormLeads;
