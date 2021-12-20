// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі



// ----не синхронізованно

// let wokeUP = () => {
//     setTimeout(() => {
//         console.log("проснувся")
//     }, 200)
// }
//
// let gotOutOfBed = () => {
//     setTimeout(() => {
//         console.log("встав з ліжка")
//     }, 700)
// }
//
//
// let makingBreakfast = () => {
//     setTimeout(() => {
//         console.log("готую сніданок")
//     }, 600)
// }
//
// let breakfast = () => {
//     setTimeout(() => {
//         console.log("снідаю")
//     }, 350)
// }
//
// let getDressed = () => {
//     setTimeout(() => {
//         console.log("вдягаюсь")
//     }, 150)
// }
//
// let  goingToTheBus = () => {
//     setTimeout(() => {
//         console.log("йду на маршрутку")
//     }, 300)
// }
//
// let getOnTheBus = () => {
//     setTimeout(() => {
//         console.log("сідаю в маршрутку")
//     }, 100)
// }
//
// let goingToWork = () => {
//     setTimeout(() => {
//         console.log("їду на роботу")
//     }, 1100)
// }
//
// let iWork = () => {
//     setTimeout(() => {
//         console.log("працюю")
//     }, 3500)
// }
//
// let rideTheTram = () => {
//     setTimeout( ()=> {
//         console.log("їду до дому")
//     }, 1000)
// }
//
// let dinner = () => {
//     setTimeout(() => {
//         console.log("вечеря")
//     }, 500)
// }
//
// let okten = () => {
//     setTimeout(() => {
//         console.log("вчуся")
//     }, 3000)
// }
// let sleep = () => {
//     setTimeout(() => {
//         console.log("сплю")
//     }, 2900)
// }

// --для наглядності що події йдуть не по порядку тому що ще не синхронно
// wokeUP()
// gotOutOfBed()
// makingBreakfast()
// breakfast()
// getDressed()
// goingToTheBus()
// getOnTheBus()
// goingToWork()
// iWork()
// rideTheTram()
// dinner()
// okten()
// sleep()


// ----------------------------callback
//
// let wokeUP = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("проснувся");
//             callback1(callback2)
//         }, 200)
// }
//
// let gotOutOfBed = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("встав з ліжка");
//             callback1(callback2)
//         }, 700)
// }
//
//
// let makingBreakfast = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("готую сніданок");
//             callback1(callback2)
//         }, 600)
// }
//
// let breakfast = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("снідаю");
//             callback1(callback2)
//         }, 350)
// }
//
// let getDressed = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("вдягаюсь");
//             callback1(callback2)
//         }, 150)
// }
//
// let  goingToTheBus = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("йду на маршрутку");
//             callback1(callback2)
//         }, 300)
// }
//
// let getOnTheBus = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("сідаю в маршрутку");
//             callback1(callback2)
//         }, 100)
// }
// let goingToWork = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("їду на роботу");
//             callback1(callback2)
//         }, 1100)
// }
//
// let iWork = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("працюю");
//             callback1(callback2)
//         }, 3500)
// }
//
// let rideTheTram = (callback1, callback2) => {
//         setTimeout( ()=> {
//             console.log("їду до дому");
//             callback1(callback2)
//         }, 1000)
// }
//
// let dinner = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("вечеря");
//             callback1(callback2)
//         }, 500)
// }
//
// let okten = (callback1, callback2) => {
//         setTimeout(() => {
//             console.log("вчуся");
//             callback1(callback2)
//         }, 3000)
// }
// let sleep = () => {
//         setTimeout(() => {
//             console.log("сплю");
//         }, 2900)
// }
//
//
//     wokeUP(gotOutOfBed, () => {
//         makingBreakfast(breakfast, () => {
//             getDressed(goingToTheBus, () => {
//                 getOnTheBus(goingToWork, () => {
//                     iWork(rideTheTram, () => {
//                         dinner(okten, () => {
//                             sleep()
//                         })
//                     })
//                 })
//             })
//         })
//     })



// --------------------------Promise


// let wokeUP = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("проснувся");
//         }, 200)
//     })
// }
//
// let gotOutOfBed = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("встав з ліжка");
//         }, 700)
//     })
// }
//
//
// let makingBreakfast = () => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve("готую сніданок");
//
//         }, 600)
//     })
// }
//
// let breakfast = () => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve("снідаю");
//
//         }, 350)
//     })
// }
//
// let getDressed = () => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve("вдягаюсь");
//
//         }, 150)
//     })
// }
//
// let  goingToTheBus = () => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve("йду на маршрутку");
//
//         }, 300)
//     })
// }
//
// let getOnTheBus = () => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve("сідаю в маршрутку");
//
//         }, 100)
//     })
// }
// let goingToWork = () => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve("їду на роботу");
//
//         }, 1100)
//     })
// }
//
// let iWork = () => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve("працюю");
//
//         }, 3500)
//     })
// }
//
// let rideTheTram = () => {
//     return new Promise( resolve => {
//         setTimeout( ()=> {
//             resolve("їду до дому");
//
//         }, 1000)
//     })
// }
//
// let dinner = () => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve("вечеря");
//
//         }, 500)
//     })
// }
//
// let okten = () => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve("вчуся")
//
//         }, 3000)
//     })
// }
// let sleep = () => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve("сплю")
//
//         }, 2900)
//     })
// }




// wokeUP()
//     .then(value => {
//         console.log(value);
//         return gotOutOfBed()
//     })
//     .then(value => {
//         console.log(value)
//        return makingBreakfast()
//     })
//     .then(value => {
//         console.log(value)
//         return breakfast()
//     })
//     .then(value => {
//         console.log(value)
//         return getDressed();
//     })
//     .then(value => {
//         console.log(value);
//         return goingToTheBus();
//     })
//     .then(value => {
//         console.log(value);
//         return getOnTheBus()
//     })
//     .then(value => {
//         console.log(value)
//         return goingToWork()
//     })
//     .then(value => {
//         console.log(value)
//         return iWork();
//     })
//     .then(value => {
//         console.log(value);
//         return rideTheTram();
//     })
//     .then(value => {
//         console.log(value)
//         return dinner();
//     })
//     .then(value => {
//         console.log(value);
//         return okten()
//     })
//     .then(value => {
//         console.log(value);
//         return sleep()
//     })
//     .then(value => console.log(value))
//     .catch(e => {
//         console.error(e);
//     })



// async function myDay() {
//     try {
//         const a = await wokeUP();
//         console.log(a);
//         const b = await gotOutOfBed();
//         console.log(b);
//         const c = await makingBreakfast();
//         console.log(c);
//         const d = await breakfast();
//         console.log(d);
//         const e = await getDressed();
//         console.log(e);
//         const f = await goingToTheBus();
//         console.log(f);
//         const g = await getOnTheBus();
//         console.log(g);
//         const h = await goingToWork();
//         console.log(h);
//         const i = await iWork();
//         console.log(i);
//         const j = await rideTheTram();
//         console.log(j);
//         const k = await dinner();
//         console.log(k);
//         const l = await okten();
//         console.log(l);
//         const m = await sleep();
//         console.log(m);
//     } catch (e) {
//         console.error(e)
//     }
// }
//
// myDay()
