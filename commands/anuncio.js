const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord-api-types/v10');
const { MessageActionRow, Modal, TextInputComponent  } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anuncio')
		.setDescription('Criação de um novo anúncio')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator | PermissionFlagsBits.BanMembers),
	async execute(interaction) {

        // Create the modal
		const modal = new Modal()
        .setCustomId('anuncioFresh')
        .setTitle('Anuncio Fresh');
        // Add components to modal
        // Create the text input components
        const tituloAnuncio = new TextInputComponent()
            .setCustomId('tituloAnuncio')
            // The label is the prompt the user sees for this input
            .setLabel("Titulo Anúncio")
            // Short means only a single line of text
            .setStyle('SHORT');
        const conteudoAnuncio = new TextInputComponent()
            .setCustomId('conteudoAnuncio')
            .setLabel("Mensagem Anúncio")
            // Paragraph means multiple lines of text.
            .setStyle('PARAGRAPH');
        /* const tipoAnuncio = new MessageSelectMenu()
            .setCustomId('theme')
            .setPlaceholder('What theme of Discord do you like?')
            .addOptions(
                {
                    label: "Informativo",
                    description: "Anúncio para publicar em Avisos.",
                    value: "informativo"
                },
                {
                    label: "Promoção",
                    description: "Anúncio para publicar em Promoções.",
                    value: "promocao"
                }
            )*/
        // An action row only holds one text input,
        // so you need one action row per text input.
        const primeiraLinha = new MessageActionRow().addComponents(tituloAnuncio);
        const segundaLinha = new MessageActionRow().addComponents(conteudoAnuncio);
        // const terceiraLinha = new MessageActionRow().addComponents(tipoAnuncio);
        // Add inputs to the modal
        modal.addComponents(primeiraLinha, segundaLinha);
        // Show the modal to the user
    
		return await interaction.showModal(modal);
	},
};