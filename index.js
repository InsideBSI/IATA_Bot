require("dotenv").config();
const { CommandoClient } = require("discord.js-commando");
const path = require("path");
const bdd = require("./bdd.json");
const { Structures } = require("discord.js");
const { MessageEmbed } = require("discord.js");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
global.db = low(adapter);

db.defaults({ users: {}, count: 0 }).write();

Structures.extend("Guild", (Guild) => {
	class MusicGuild extends Guild {
		constructor(client, data) {
			super(client, data);
			this.musicData = {
				queue: [],
				isPlaying: false,
				volume: 1,
				songDispatcher: null,
			};
		}
	}
	return MusicGuild;
});

const client = new CommandoClient({
	commandPrefix: "*",
	owner: "692330385941725284",
	unknownCommandResponse: false,
});

Structures.extend("Guild", (Guild) => {
	class MusicGuild extends Guild {
		constructor(client, data) {
			super(client, data);
			this.musicData = {
				queue: [],
				isPlaying: false,
				volume: 1,
				songDispatcher: null,
			};
		}
	}
	return MusicGuild;
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		["chat", "CHAT commands"],
		["images", "Images commands"],
		["rules", "The rules of the I.A.T.A. serveur"],
		["send-content", "DEV messages"],
		["ticket", "Ticket system"],
		["test", "Testing stuff"],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, "commands"));

//------------------- :) -------------------//

client.once("ready", () => {
	console.log(`IATA Bot is READYY !`);
	let statuts = bdd.stats;
	setInterval(function () {
		let stats = statuts[Math.floor(Math.random() * statuts.length)];
		client.user.setActivity(stats, { type: "STREAMING" });
	}, 2500);

	var ruleChannel = client.channels.fetch("757604820063617024").then((channel) => {
		//------------------- EMBED -------------------//
		const step1 = new MessageEmbed()
			.setColor("#a1d85b")
			.setTitle("**__WELCOME__**\n➖➖➖➖➖➖➖➖➖➖")
			.setDescription(
				"Salut, je suis le bot de l'I.A.T.A et je vais t'aider à choisir ta classe\n\n<a:warn:759790308250222634> Attention, attends à chaque fois que toutes les réactions soient mises avant d'en choisir une ... c'est très important, j'ai besoin d'un peu de temps pour te donner les bonnes infos et trier celles que tu me donnes ;))"
			)
			.setThumbnail("https://cutt.ly/BOT-IATA")
			.addFields(
				{
					name: "➖➖➖",
					value: "<:Steiner:760840796483747880> - **Steiner**",
				},
				{
					name: "➖➖➖",
					value: "<:Classes:760612294820102174> - **Autre**",
				},
				{
					name: "➖➖➖",
					value: "<:ancien:759542300333834300> - **Ancien**",
				}
			);
		//------------------- EMBED -------------------//
		//------------------- EMBED -------------------//
		const step2 = new MessageEmbed()
			.setColor("#a1d85b")
			.setTitle("**__SECOND STEP__**\n➖➖➖➖➖➖➖➖➖➖")
			.setDescription("<:Gaming_bot:760850210670379008> Super, tu as réussis la première étape, ... continues maintenant et choisis la réaction qui correspond à l'année dans laquelle tu es.")
			.addFields(
				{
					name: "➖➖➖",
					value: "<:1e:757206153058058340> - **1ère ou 7ème Steiner**",
				},
				{
					name: "➖➖➖",
					value: "<:2e:757206153221373962> - **2ème et 2ème supplémentaire ou 8ème Steiner**",
				},
				{
					name: "➖➖➖",
					value: "<:3e:757206153456517130> - **3ème ou 9ème Steiner**",
				},
				{
					name: "➖➖➖",
					value: "<:4e:757206153091612823> - **4ème ou 10ème Steiner**",
				},
				{
					name: "➖➖➖",
					value: "<:5e:757206153200664598> - **5ème ou 11ème Steiner**",
				},
				{
					name: "➖➖➖",
					value: "<:6e:757206153716432917> - **6ème ou 12ème Steiner**",
				},
				{
					name: "➖➖➖",
					value: "<:7e:757206153410117683> - **7ème**",
				}
			);
		//------------------- EMBED -------------------//
		//------------------- EMBED -------------------//
		const step3 = new MessageEmbed()
			.setColor("#a1d85b")
			.setTitle("**__THIRD STEP__**\n➖➖➖➖➖➖➖➖➖➖")
			.setDescription("<:Dance_bot:760850209831649320> À présent choisis entre...")
			.addFields(
				{
					name: "➖➖➖",
					value: "<:transition:756253518397964468> - **Transition**",
				},
				{
					name: "➖➖➖",
					value: "<:qualification:756253517932658830> - **Qualification**",
				},
				{
					name: "➖➖➖",
					value: "<:professionnel:756253518196899980> - **Professionnel**",
				}
			);
		//------------------- EMBED -------------------//
		//------------------- EMBED -------------------//
		const step4T = new MessageEmbed()
			.setColor("#a1d85b")
			.setTitle("**__FOURTH STEP__**\n➖➖➖➖➖➖➖➖➖➖")
			.setDescription("<:Rock_bot:760850210644688946> À présent choisis entre...")
			.addFields(
				{
					name: "➖➖➖",
					value: "<:SA:757163459942023238> - **Sciences Appliqués**",
				},
				{
					name: "➖➖➖",
					value: "<:AG:757163456515538985> - **Arts Graphiques**",
				},
				{
					name: "➖➖➖",
					value: "<:Art:757163456892764231> - **Arts**",
				},
				{
					name: "➖➖➖",
					value: "<:ARPA:757163456716734565> - **Art de la parole**",
				},
				{
					name: "➖➖➖",
					value: "<:AV:757163459912794143> - **Audio-Visuel**",
				}
			);
		//------------------- EMBED -------------------//
		//------------------- EMBED -------------------//
		const step4Q = new MessageEmbed()
			.setColor("#a1d85b")
			.setTitle("**__FOURTH STEP__**\n➖➖➖➖➖➖➖➖➖➖")
			.setDescription("<:Rock_bot:760850210644688946> À présent choisis entre...")
			.addFields(
				{
					name: "➖➖➖",
					value: "<:IG:757163459967451187> - **Industrie Graphique**",
				},
				{
					name: "➖➖➖",
					value: "<:MT:757163460118446120> - **Micro-technique**",
				},
				{
					name: "➖➖➖",
					value: "<:ASH:757163460344938507> - **Art et Structure de l'Habitat**",
				},
				{
					name: "➖➖➖",
					value: "<:IB:757163460118446230> - **Industrie du Bois**",
				},
				{
					name: "➖➖➖",
					value: "<:TA:757163460038754304> - **Techniques Artistiques**",
				},
				{
					name: "➖➖➖",
					value: "<:Info:757163459971645440> - **Infographie**",
				},
				{
					name: "➖➖➖",
					value: "<:Photo:757163460264984646> - **Photographie**",
				},
				{
					name: "➖➖➖",
					value: "<:DAOMca:757163460374036540> - **Dessinateur DAO en Mécanique-Électricté**",
				},
				{
					name: "➖➖➖",
					value: "<:DAOCons:757163460034297897> - **Dessinateur DAO en Construction**",
				},
				{
					name: "➖➖➖",
					value: "<:TEC:757163459904536606> - **Technicien en Encadrement de Chantier**",
				},
				{
					name: "➖➖➖",
					value: "<:MMDD:757163460307058778> - **Multimédia - Digital Designer**",
				},
				{
					name: "➖➖➖",
					value: "<:MMAV:757163460000743485> - **Multimédia - Audiovisuel**",
				},
				{
					name: "➖➖➖",
					value: "<:IS:757163459988291715> - **Image de Synthèse**",
				}
			);
		//------------------- EMBED -------------------//
		//------------------- EMBED -------------------//
		const step4P = new MessageEmbed()
			.setColor("#a1d85b")
			.setTitle("**__FOURTH STEP__**\n➖➖➖➖➖➖➖➖➖➖")
			.setDescription("<:Rock_bot:760850210644688946> À présent choisis entre...")
			.addFields(
				{
					name: "➖➖➖",
					value: "<:Hor:757163459916988446> - **Horlogerie**",
				},
				{
					name: "➖➖➖",
					value: "<:Imp:757163460546003035> - **Imprimerie**",
				},
				{
					name: "➖➖➖",
					value: "<:Bois:757163459895885884> - **Bois**",
				},
				{
					name: "➖➖➖",
					value: "<:Bij:757163459925377034> - **Bijouterie**",
				},
				{
					name: "➖➖➖",
					value: "<:Art:757163456892764231> - **Arts**",
				},
				{
					name: "➖➖➖",
					value: "<:Gar:757163459552083980> - **Restauration - Ganissage**",
				},
				{
					name: "➖➖➖",
					value: "<:AMP:757163456632717412> - **Assistant aux Métiers de la Publicité**",
				},
				{
					name: "➖➖➖",
					value: "<:Cuis:757163460457922591> - **Cuisiniste**",
				}
			);
		//------------------- EMBED -------------------//
		//------------------- EMBED -------------------//
		const step5 = new MessageEmbed()
			.setColor("#a1d85b")
			.setTitle("**__FIFTH STEP__**\n➖➖➖➖➖➖➖➖➖➖")
			.setDescription("<:Animes_bot:760850206555373580> Yes, courage, c'est bientôt terminé !")
			.addFields(
				{
					name: "➖➖➖",
					value: "<:no:754929006272446464> - **Rien**",
				},
				{
					name: "➖➖➖",
					value: "🇦 - **A**",
				},
				{
					name: "➖➖➖",
					value: "🇧 - **B**",
				},
				{
					name: "➖➖➖",
					value: "🇨 - **C**",
				}
			);
		//------------------- EMBED -------------------//
		const msg = channel.messages.fetch({ limit: 1 }).then((m) => {
			const reactFilter = (reaction) => reaction.emoji.id === "754681565384015965";
			try {
				m.entries().next().value[1].react("754681565384015965");
			} catch (error) {
				console.log(error);
			}
			const collector = m.entries().next().value[1].createReactionCollector(reactFilter);
			collector.on("collect", (r, u) => {
				if (u.bot) return 0;
				r.remove();
				r.message.react("754681565384015965");
				///---------------------------------------------------------//
				u.send(step1).then((m) => {
					m.react("760840796483747880");
					m.react("760612294820102174");
					m.react("759542300333834300");
					const reactFilter = (reaction) => reaction.emoji.id === "760840796483747880" || reaction.emoji.id === "760612294820102174" || reaction.emoji.id === "759542300333834300";
					const collector = m.createReactionCollector(reactFilter);
					collector.on("collect", (r, u) => {
						if (u.bot) return 0;
						const emojiName = r.emoji.id;
						switch (emojiName) {
							case "760840796483747880":
								console.log("Steiner");
								db.set(`users.${u.id}.flags`, "Steiner").write();
								break;
							case "760612294820102174":
								console.log("Autre");
								db.set(`users.${u.id}.flags`, "Autre").write();
								break;
							case "759542300333834300":
								console.log("Ancien");
								db.set(`users.${u.id}.flags`, "Ancien").write();
								break;
						}
						r.message.delete();

						u.send(step2).then((m) => {
							const stepMojis = [
								"757206153058058340",
								"757206153221373962",
								"757206153456517130",
								"757206153091612823",
								"757206153200664598",
								"757206153716432917",
								"757206153410117683",
							];
							stepMojis.forEach((k, v) => {
								m.react(k);
							});

							const reactFilter = (reaction) => stepMojis.includes(reaction.emoji.id);
							const collector = m.createReactionCollector(reactFilter);
							collector.on("collect", (r, u) => {
								if (u.bot) return 0;
								const emojiName = r.emoji.name;
								console.log(emojiName[0]);
								db.set(`users.${u.id}.class`, emojiName[0]).write();
								r.message.delete();

								u.send(step3).then((m) => {
									const stepMojis = ["756253518397964468", "756253517932658830", "756253518196899980"];
									stepMojis.forEach((k, v) => {
										m.react(k);
									});

									const reactFilter = (reaction) => stepMojis.includes(reaction.emoji.id);
									const collector = m.createReactionCollector(reactFilter);
									collector.on("collect", (r, u) => {
										if (u.bot) return 0;
										const emojiName = r.emoji.name;
										console.log(emojiName[0]);
										db.set(`users.${u.id}.class`, emojiName[0]).write();
										r.message.delete();

										u.send(step4T).then((m) => {
											const stepMojis = ["757163459942023238", "757163456515538985", "757163456892764231", "757163456716734565", "757163459912794143"];
											stepMojis.forEach((k, v) => {
												m.react(k);
											});

											const reactFilter = (reaction) => stepMojis.includes(reaction.emoji.id);
											const collector = m.createReactionCollector(reactFilter);
											collector.on("collect", (r, u) => {
												if (u.bot) return 0;
												const emojiName = r.emoji.name;
												console.log(emojiName[0]);
												db.set(`users.${u.id}.class`, emojiName[0]).write();
												r.message.delete();

												u.send(step4Q).then((m) => {
													const stepMojis = [
														"757163459967451187",
														"757163460118446120",
														"757163460344938507",
														"757163460118446230",
														"757163460038754304",
														"757163459971645440",
														"757163460264984646",
														"757163460374036540",
														"757163460034297897",
														"757163459904536606",
														"757163460307058778",
														"757163460000743485",
														"757163459988291715",
													];
													stepMojis.forEach((k, v) => {
														m.react(k);
													});

													const reactFilter = (reaction) => stepMojis.includes(reaction.emoji.id);
													const collector = m.createReactionCollector(reactFilter);
													collector.on("collect", (r, u) => {
														if (u.bot) return 0;
														const emojiName = r.emoji.name;
														console.log(emojiName[0]);
														db.set(`users.${u.id}.class`, emojiName[0]).write();
														r.message.delete();

														u.send(step4P).then((m) => {
															const stepMojis = [
																"757163459916988446",
																"757163460546003035",
																"757163459895885884",
																"757163459925377034",
																"757163456892764231",
																"757163459552083980",
																"757163456632717412",
																"757163460457922591",
															];
															stepMojis.forEach((k, v) => {
																m.react(k);
															});

															const reactFilter = (reaction) => stepMojis.includes(reaction.emoji.id);
															const collector = m.createReactionCollector(reactFilter);
															collector.on("collect", (r, u) => {
																if (u.bot) return 0;
																const emojiName = r.emoji.name;
																console.log(emojiName[0]);
																db.set(`users.${u.id}.class`, emojiName[0]).write();
																r.message.delete();
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});

	client.user.setStatus("online");
});

client.on("error", console.error);

client.login(process.env.DISCORD_API_TOKEN);
