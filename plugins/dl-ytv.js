/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:t,command:r,text:i,args:l})=>{if(!i)return a.reply(`Que desea descargar de Youtube?, Ejemplo de uso: 

${Prefijo+r} https://youtu.be/cNgyuHtBBW8`);if(!isUrl(l[0])&&!l[0].includes("youtu"))return reply("*[ ! ] Link inv\xe1lido*\n_Por favor, use un link de YouTube_\n");await a.reply(MultiNK.Proces(await t.getName(a.sender)));let n=encodeURIComponent(i);try{let o=await fetchJson(`https://latam-api.vercel.app/api/ytmp4?apikey=${MyApiKey}&q=${n}`);await t.sendMessage(a.chat,{document:{url:o.descarga},mimetype:"video/mp4",fileName:`${o.titulo}.mp4`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg")},{quoted:a}).catch(e=>{a.reply(MultiNK.Error1())})}catch(d){a.reply(MultiNK.Error0())}};handler.help=["ytv <link>"],handler.tags=["servicio"],handler.command=/^(ytv)$/i,handler.limit=!0;export default handler;
