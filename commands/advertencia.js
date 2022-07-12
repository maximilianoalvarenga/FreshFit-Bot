const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord-api-types/v10');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('advertencia')
		.setDescription('Informa uma advertencia')
		.addUserOption(option => 
            option.setName('funcionario')
                .setDescription('Seleciona um funcionario para receber a advertência')
                .setRequired(true))
		.addStringOption(option =>
			option.setName('motivo')
				.setDescription('Motivo da advertência')
				.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator | PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		const channel = '975227401476915250';
		const membro = interaction.options.getUser('funcionario');
		const motivo = interaction.options.getString('motivo');

		const msg = 'Membro: <@'+membro+'>\nMotivo: '+motivo;

		interaction.client.channels.cache.get(channel).send(msg);
		interaction.client.users.fetch(membro).then((user) => {
            try {
                user.send("Olá <@"+membro+"> você está sendo advertido por não seguir as normas previstas no Fresh&Fit.\nMotivo: "+
                motivo+". Lembre-se, ao atingir o teto máximo de advertências você será automaticamente desligado.");	
            } catch (err){
                console.log(err)
            }});
		return interaction.reply({ content: `Advertência informada com sucesso! <@${interaction.user.id}>`, ephemeral: true });
	},
};