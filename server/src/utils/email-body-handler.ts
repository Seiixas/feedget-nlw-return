interface EmailBody {
  type: string;
  comment: string;
  screenshot?: string;
}

export function handleEmailBody({ type, comment, screenshot }: EmailBody): string {
  const emailBody = [
      `<div style="background-color: #27272a; color: #f4f4f5; font-family: sans-serif; padding: 4rem;">`,
      ` <div style="background-color: #18181b; color: #f4f4f5; padding: 1rem 4rem; border-radius: 1rem;">`,
      `   <header>`,
      `     <h1 style="color: #996dff; text-align: center;">Novo Feedback!</h1>`,
      `   </header>`,
      ` <main>`,
      `   <p>Olá! Um usuário envitou um novo feedback da sua aplicação!</p>`,
      `   <section>`,
      `     <article>`,
      `       <h2 style="color: #996dff;">Tipo de Feedback!</h2>`,
      `         <p>Você recebeu um feedback de <strong>${type}</strong></span></p>`,
      `     </article>`,
      `     <article>`,
      `       <h2 style="color: #996dff;">Comentário</h2>`,
      `       <p>O usuário anexou o seguinte comentário: <cite>"${comment}"</cite></p>`,
      `     </article>`
  ];

  if (screenshot) {
    emailBody.push(  
      `     <article>`,
      `       <h2 style="color: #996dff;">Captura de Tela</h2>`,
      `       <p>A seguinte captura de tela do momento do feedback foi feita pelo usuário</p>`,
      `       <div style="text-align: center; padding: 1rem 0;">`,
      `         <a style="text-decoration: none"download="screenshot.png" href="${screenshot}">`,
      `            <img src="${screenshot}" alt="Captura de tela do momento do feedback" style="width: 960px; height: 600px; border-radius: 1rem;" />`,
      `         </a>`,
      `         <em style="display: block; padding-top: 0.25rem; color: #6e6e70;">Clique na imagem para efetuar o download</em>`,
      `       </div>`,
      `     </article>`
      );
  }

  emailBody.push(
      `     <hr />`,
      `   </section>`,
      `   <footer style="text-align: center; color: #6e6e70; display: flex; justify-content: space-between; align-items: center;">`,
      `     <h1><em>💭 Equipe Feedget</em></h1>`,
      `     <p>💡Projeto criado durante a Next Level Week</p>`,
      `    <div>`,
      `     <ul style="list-style: none; padding: 0; display: inline-block;">`,
      `        <li style="display: inline;">`,
      `           <a style="text-decoration: none; color: #f4f4f5" href="https://linkedin.com/in/mateuseixas/">LinkedIn</a>`,
      `        </li>`,
      `        <li style="display: inline;">`,
      `           <a style="text-decoration: none; color: #f4f4f5"href="https://github.com/Seiixas">Github</a>`,
      `         </li>`,
      `       </ul>`,
      `     </div>`,
      `   </footer>`,
      ` </main>`,
      ` </div>`,
      `</div>`);

  const emailBodyJoined = emailBody.join('\n');

  return emailBodyJoined;
}