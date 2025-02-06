import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function FormDepoiments() {
    const ServiceID = "service_esbbmjy";
    const TemplateID = "template_xf7imyj";
    const PublicKey = "rij6ynPB069F-T3vC";
    const ImgBB_API = "76d9ef14a12589f50487b228871555a3"; 

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState("");
    const [sentEmail, setSentEmail] = useState(false);

    async function uploadImage(file: File) {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file); // Base64 que a API necessita
            reader.onload = async () => {
                try {
                    const formData = new FormData();
                    formData.append("image", reader.result?.toString().split(",")[1] || ""); // Remove "data:image/png;base64,"
    
                    const response = await fetch(`https://api.imgbb.com/1/upload?key=${ImgBB_API}`, {
                        method: "POST",
                        body: formData,
                    });
    
                    const data = await response.json();
                    if (data.success) {
                        resolve(data.data.url); // 🔹 Retorna a URL da imagem
                    } else {
                        reject("Erro ao enviar imagem");
                    }
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = (error) => reject(error);
        });
    }
    

    async function sendEmail(e: React.FormEvent) {
        e.preventDefault();

        if (!name || !message || !agree) {
            alert("Por favor, preencha todos os campos e aceite os termos de uso.");
            return;
        }

        let uploadedImageUrl = "";

        if (image) {
            uploadedImageUrl = await uploadImage(image);
        }

        const templateParams = {
            from_name: name,
            name: name,
            company: company,
            message: message,
            image_url: uploadedImageUrl, 
        };

        emailjs.send(ServiceID, TemplateID, templateParams, PublicKey)
            .then((response) => {
                console.log("Email enviado com sucesso!", response.status, response.text);
                setName("");
                setCompany("");
                setMessage("");
                setImage(null);
                setAgree(false);
                setImageUrl(uploadedImageUrl);
                setSentEmail(true);
            })
            .catch((err) => {
                console.error("Erro ao enviar email!", err);
            });
    }

    function otherEmail() {
        setSentEmail(false);
    }

    return (
        <div className="max-w-md mx-auto p-6 rounded-2xl">
            <h2 className="font-bold text-center mb-10 text-2xl lg:text-xl" >DEIXAR DEPOIMENTO</h2>

            {sentEmail ? (
                <div className="flex flex-col items-center text-center py-6 gap-5">
                    <h2 className="text-white mt-4">Depoimento enviado com sucesso!</h2>
                    <p className="text-white">Em breve, você receberá um email de confirmação.</p>
                    {imageUrl && (
                        <a href={imageUrl} target="_blank" className="text-blue-400 underline">Ver imagem enviada</a>
                    )}
                    <button
                        type="button" onClick={otherEmail}
                        className="rounded-3xl border border-white text-center inline-flex gap-2 px-12 py-3 text-white hover:bg-white hover:text-black transition duration-300"
                    >
                        Enviar outro depoimento
                    </button>
                </div>
            ) : (
                <form className="space-y-4 flex flex-col items-center" onSubmit={sendEmail}>
                    <input
                        className="w-full p-3 rounded-2xl bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="text"
                        placeholder="Seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input
                        className="w-full p-3 rounded-2xl bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="text"
                        placeholder="Sua empresa (Opcional)"
                        onChange={(e) => setCompany(e.target.value)}
                        value={company}
                    />

                    <textarea
                        className="w-full p-3 rounded-2xl bg-white border border-gray-300 placeholder-[#1a1a1a] text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
                        placeholder="Sua mensagem"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        rows={4}
                    />

                    <label
                        htmlFor="image"
                        className="block w-full mb-2">Sua foto ou logo da empresa</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                        className="w-full p-3 rounded-2xl bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
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

export default FormDepoiments;
