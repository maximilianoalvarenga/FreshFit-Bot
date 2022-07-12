const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ausencia')
		.setDescription('Informa um')
		.addStringOption(option =>
		option.setName('data')
			.setDescription('Data que ficará ausente')
			.setRequired(true))
		.addStringOption(option =>
			option.setName('motivo')
				.setDescription('Motivo ausência')
				.setRequired(true)),
	async execute(interaction) {
		const channel = '974784271208284180';
		const data = interaction.options.getString('data');
		const motivo = interaction.options.getString('motivo');

		const msg = 'Membro: <@'+interaction.user.id+'>\nData: '+data+'\nMotivo: '+motivo;


		interaction.client.channels.cache.get(channel).send(msg)
		
		return interaction.reply({ content: `Ausência informada com sucesso! <@${interaction.user.id}>`, ephemeral: true });
	},
};