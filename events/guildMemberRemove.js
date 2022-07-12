module.exports = {
	name: 'guildMemberRemove',
	async execute(member) {
        try {
            const channel = '989873743901913128';
            const msg = `${member} foi desligado da empresa.`
            member.client.channels.cache.get(channel).send(msg);
        } catch (error) {
            console.log(error);
        }
	},
};