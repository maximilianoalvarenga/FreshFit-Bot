const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, Modal, TextInputComponent } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('denuncia')
		.setDescription('Informar uma situação de denúncia'),
	async execute(interaction) {

        // Create the modal
		const modal = new Modal()
        .setCustomId('denunciasFresh')
        .setTitle('Formulário de denúncia');
        // Add components to modal
        // Create the text input components
        const corpoDenuncia = new TextInputComponent()
            .setCustomId('conteudoDenuncia')
            .setLabel("Informe os fatos que achar necessário: ")
            // Paragraph means multiple lines of text.
            .setStyle('PARAGRAPH');
        // An action row only holds one text input,
        // so you need one action row per text input.
        const firstActionRow = new MessageActionRow().addComponents(corpoDenuncia);
        // Add inputs to the modal
        modal.addComponents(firstActionRow);
        // Show the modal to the user
    
		return await interaction.showModal(modal);
	},
};