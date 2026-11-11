// Se ejecuta cada vez que alguien envía un formulario de Netlify.
// Solo actúa con el formulario "newsletter" y con la casilla de consentimiento marcada.
const LIST_ID = 3; // "Suscriptores newsletter" en Brevo

exports.handler = async (event) => {
  const { payload } = JSON.parse(event.body);
  if (payload.form_name !== 'newsletter') return { statusCode: 200 };

  const data = payload.data || {};
  if (data.consentimiento !== 'si' || !data.email) return { statusCode: 200 };

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      listIds: [LIST_ID],
      updateEnabled: true,
    }),
  });

  if (!res.ok) console.error('Brevo error', res.status, await res.text());
  return { statusCode: 200 };
};
