const empresa = {
    "nome": "TechDev Soluções",
    "fundacao": 2015,
    "sede": {
        "cidade": "São Paulo",
        "endereco": "Av. Paulista, 1000",
        "cep": "01310-000"
    },
    "departamentos": [
        {
            "nome": "Desenvolvimento",
            "funcionarios": 25,
            "projetos": ["Website", "Aplicativo Mobile", "Sistema Interno"]
        },
        {
            "nome": "Design",
            "funcionarios": 12,
            "projetos": ["UI/UX", "Branding"]
        },
        {
            "nome": "Marketing",
            "funcionarios": 8,
            "projetos": ["Campanha Digital", "Redes Sociais", "SEO"]
        }
    ],
    "quadro":
    {
        "Total": "45 funcionarios"
    },
    "contato": {
        "email": "contato@techdev.com.br",
        "telefone": {
            "comercial": "(11) 3000-1000",
            "suporte": "(11) 3000-2000"
        }
    }
};

console.log(empresa)

// lista de projetos nao apareco no terminal, mas abrindo pelo browser esta correto