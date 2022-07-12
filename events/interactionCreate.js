module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
        if (interaction.isCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);
            try {
                await command.execute(interaction);
                const channel = '994225715937542305';
                const msg = `${interaction.user.tag} realizou o comando de ${interaction.commandName} no canal ${interaction.channel.name} .`
                if (interaction.commandName !== 'denuncia') {
                    interaction.client.channels.cache.get(channel).send(msg);
                }
            } catch (error) { 
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
        
        if (interaction.isModalSubmit()) {
            if (interaction.customId === 'anuncioFresh') {
                const canalAviso = '974804168822886440';
                const canalGeral = '974801508216496188';

                const tituloAnuncio = interaction.fields.getTextInputValue('tituloAnuncio');
                const msgAnuncio = interaction.fields.getTextInputValue('conteudoAnuncio');
                // const tipoAnuncio = interaction.fields.getSelectMenuValue('theme');

                const msg = "**"+tituloAnuncio+"**\n\n"+msgAnuncio+"\n <@&974809873936183396>";

                interaction.client.channels.cache.get(canalAviso).send(msg);
                interaction.client.channels.cache.get(canalGeral).send(msg);

                await interaction.reply({ content: 'Seu anúncio foi publicado com Sucesso!!', ephemeral: true  });
            }

            if (interaction.customId === 'denunciasFresh') {
                const canalDenuncia = '995973835914477638';
                const denuncia = interaction.fields.getTextInputValue('conteudoDenuncia');
                const msg = "Denunciante: <@"+interaction.user.id+">\nDenuncia: "+denuncia;

                interaction.client.channels.cache.get(canalDenuncia).send(msg);
                await interaction.reply({ content: 'Sua denúncia foi informada com Sucesso!!', ephemeral: true  });
            }
        }
	},
};