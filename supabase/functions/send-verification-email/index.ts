import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface VerificationEmailRequest {
  email: string;
  name: string;
  userType: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, userType }: VerificationEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "PosTym <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to PosTym - Please Verify Your Email",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Welcome to PosTym, ${name}!</h1>
          <p>Thank you for registering as a ${userType} with PosTym.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e40af; margin-top: 0;">Next Steps:</h2>
            <ol>
              <li>Check your email for the verification link from Supabase</li>
              <li>Click the verification link to activate your account</li>
              <li>Log in to your PosTym dashboard</li>
              <li>Complete your profile setup</li>
            </ol>
          </div>

          <p><strong>What happens next?</strong></p>
          <ul>
            <li>Our team will review your registration</li>
            <li>You'll receive approval notification within 24-48 hours</li>
            <li>Once approved, you can start using all PosTym features</li>
          </ul>

          <p>If you have any questions, feel free to contact our support team.</p>
          
          <p>Best regards,<br>The PosTym Team</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending verification email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);