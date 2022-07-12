module.exports = {
	name: 'messageCreate',
	async execute(message) {
		const channelCommandsLog = '994225715937542305';

		if(message.channel.id === '974803754320822292'){
			if(message.attachments.size > 0){
				message.reply('```\n'+message.attachments.first().url+'\n```');
			}
		}

		/**
		 * Canal Bate-Papo  
		 */
		if(message.channel.id === '974801508216496188'){
			const contentMessage = message.content;
			const msgUpperCase = contentMessage.toUpperCase();

			if(msgUpperCase.includes('BOM DIA') && !message.author.bot){
				message.reply('> Bom Dia, bora trabalhar?!');
			}
			if(msgUpperCase.includes('BOA TARDE') && !message.author.bot){
				message.reply('> Boa Tarde, não esqueça de tomar água!!');
			}
			if(msgUpperCase.includes('BOA NOITE') && !message.author.bot){
				message.reply('> Boa Noite, hora de dormir né?!');
			}
		}

		/**
		 * Canal Advertencias
		 */
		if (message.channel.id === '975227401476915250') {
			const member = message.mentions.members.first();
			const roleAdv1 = '975227674853257258';
			const roleAdv2 = '975227948074401832';

			if (member.roles.cache.some(role => role.id !== roleAdv1 && role.id !== roleAdv2)) {
				member.roles.add(roleAdv1);
			}
			if (member.roles.cache.some(role => role.id === roleAdv1 && role.id !== roleAdv2)) {
				member.kick();
				const msg = `${member} foi desligado(a) por atingir limite de advertências`;
                message.client.channels.cache.get(channelCommandsLog).send(msg);
			}
		}
	},
};