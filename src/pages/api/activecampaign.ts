// pages/api/activecampaign.ts

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email } = req.body;

  const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;
  const baseUrl = process.env.ACTIVECAMPAIGN_API_URL;

  try {
    // 1. Criar ou atualizar o contato
    const contactRes = await fetch(`${baseUrl}/api/3/contacts`, {
      method: 'POST',
      headers: {
        'Api-Token': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact: {
          email,
          firstName: name,
        },
      }),
    });

    const contactData = await contactRes.json();
    const contactId = contactData.contact?.id;

    if (!contactId) throw new Error('Erro ao criar contato');

    // 2. Adicionar à lista 51
    const listRes = await fetch(`${baseUrl}/api/3/contactLists`, {
      method: 'POST',
      headers: {
        'Api-Token': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contactList: {
          list: '51',
          contact: contactId,
          status: 1,
        },
      }),
    });

    if (!listRes.ok) throw new Error('Erro ao adicionar à lista');

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno' });
  }
}