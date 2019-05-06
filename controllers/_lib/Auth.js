import { statusCodes } from '../../statusCodes';
import { resPartner } from '../../models';
import { ResponseFactory } from '../../helper';

export class Auth {
  constructor(firebase) {
    this.firebase = firebase;

    this.signUpWithEmailAndPassword = this.signUpWithEmailAndPassword.bind(this);
    this.signInWithEmailAndPassword = this.signInWithEmailAndPassword.bind(this);
  }

  async signUpWithEmailAndPassword(body) {
    const { email, password } = body;
    const { services } = this.firebase;

    services.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        const { uid } = res.user;
        resPartner.create({
          email,
          fuid: uid
        }).then(pgRes => {
          console.log('pg success', pgRes);
        })
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  async signInWithEmailAndPassword(body) {
    const { email, password } = body;
    const { services } = this.firebase;

    let response = ResponseFactory.create({ code: 0, msg: 'nothing' });

    await services.auth().signInWithEmailAndPassword(email, password)
      .then(async res => {
        console.log(res.user)
        console.time('pg')
        const pgUser = await resPartner.findOne({
          attributes: ['email', 'fuid'],
          where: {
            fuid: res.user.uid
          }
        });
        console.timeEnd('pg')
        response = ResponseFactory.create(statusCodes.OK, 'sucesso!', pgUser.dataValues);
      })
      .catch(err => {
        console.log('in here', err);
      })

    return response;
  }

  _
}