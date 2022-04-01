console.log('JS OK!');

const app = new Vue({

    el: '#app',
    data: {
        indexCounter: -1,
        timeClicked: 0,
        counterMessage: null,
        userText: '',
        searchText: '',
        personalId: {
            name: 'Erik S.',
            avatar: 'Erik.jpg'
        },
        contacts: [
            {
                name: 'Lucio',
                access: '',
                avatar: 'avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '16:15',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Lorenzo',
                access: '',
                avatar: 'avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '16:30',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '16:30',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '16:35',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Stefano',
                access: '',
                avatar: 'avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '10:10',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '10:20',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '16:15',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luca',
                access: '',
                avatar: 'avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Ciro',
                access: '',
                avatar: 'avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Mary',
                access: '',
                avatar: 'avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '15:51',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Adriano',
                access: '',
                avatar: 'avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Gian',
                access: '',
                avatar: 'avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '15:50',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '15:51',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        infoMenu: ['Reply', 'Delete Message'],
        accessList: ['online', 'He is writing...', 'Last accessed recently', 'Last access']
    },

    methods: {
        selectContact(index) {
            this.indexCounter = index;
        },
        selectMessage(index) {
            if (this.timeClicked == 0) {
                this.counterMessage = index;
                this.timeClicked++;
            } else {
                this.counterMessage = null;
                this.timeClicked--;
            }
        },
        addMessage() {
            if (this.userText.length > 0) {

                let time = this.generaRandom(2, 6) * 1000;
                let date = new Date();

                this.contacts[this.indexCounter].messages.push({
                    date: date.getHours() + ':' + date.getMinutes(),
                    message: this.userText,
                    status: 'sent'
                });

                setTimeout(() => {
                    this.contacts[this.indexCounter].access = this.accessList[0];
                }, time);

                setTimeout(() => {
                    this.contacts[this.indexCounter].access = this.accessList[1];
                }, time + 1000);

                setTimeout(() => {
                    this.contacts[this.indexCounter].messages.push({
                        date: date.getHours() + ':' + date.getMinutes(),
                        message: 'OK, BRO E DAJJEEE!!!',
                        status: 'received'
                    });

                    this.contacts[this.indexCounter].access = this.accessList[0]

                }, time + 3000);

                setTimeout(() => {
                    this.contacts[this.indexCounter].access = this.accessList[2];
                }, time + 5000);
            }

            this.userText = '';
        },
        generaRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        filterChat() {

            if (this.searchText.length > 0) {
                this.contacts.forEach(contact => {
                    if (contact.name.toLowerCase().includes(this.searchText.toLowerCase())) {
                        contact.visible = true;
                    } else {
                        contact.visible = false;
                    }
                });
            } else {
                this.contacts.forEach(contact => {
                    contact.visible = true;
                });
            }
        },
        deleteMessage(index) {
            this.contacts[this.indexCounter].messages.splice(this.counterMessage, 1);

            let date = new Date();
            if (date !== undefined) {
                console.log(date);
            } else {
            }

            this.counterMessage = null;
        }
    }
})