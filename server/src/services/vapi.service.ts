interface CallPayload {
  phoneNumber: string;
  userName: string;
  preferredCourse?: string;
}

export const initiateOutboundCall = async (data: CallPayload) => {

  const phone = "+91" + data.phoneNumber;

  const response = await fetch("https://api.vapi.ai/call", {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VAPI_API_KEY}`
    },

    body: JSON.stringify({

      assistantId: process.env.VAPI_ASSISTANT_ID,

      phoneNumberId: process.env.VAPI_PHONE_NUMBER_ID,

      customer: {
        number: phone
      },

      assistantOverrides: {
        firstMessage: `Hello ${data.userName}! I'm Ava from EduReach College. I see you're interested in ${data.preferredCourse}. How can I help you today?`
      }

    })

  });

  return response.json();

};