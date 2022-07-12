module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
        try {
            const channel = '989499258166210570';
            const msg = `${member} é um novo membro.`
            member.client.channels.cache.get(channel).send(msg);
        } catch (error) {
            console.log(error);
        }
	},
};