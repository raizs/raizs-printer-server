export default class InfluxSimulator {

	static getWeekDay(i) {
		const arr = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
		if (i>6) return '';
		return arr[i];
	}

	static groupTrackings(entity, filter, time) {
		switch (filter) {
			case 'month': return this.groupByMonth(entity, time);
			case 'week': return this.groupByWeek(entity, time);
			case 'day': return this.groupByDay(entity, time);
			default: return;
		}
	}

	static groupByWeek(entity, time){
		var aux = new Date();
		aux = aux.getTime() + 1000*60*60*24*7*time;
		const now = new Date(aux);
		const intervals = [];

		const actualWeekDay = now.getDay();
		const firstDay = now - (actualWeekDay*1000*60*60*24);

		for (var k=0; k <= 6; k++) {
			var counter = 0;
			for (var j in entity) {
				const date = (firstDay + k*(60*60*1000*24));
				const aux = new Date(date);
				const day = aux.getDate();
				const month = aux.getMonth();
				const eventDay = entity[j].created_at.getDate();
				const eventMonth = entity[j].created_at.getMonth();
				if (day == eventDay && month == eventMonth) {
					counter++;
				}
			}
			const i = this.getWeekDay(k);
			intervals.push({
				i, counter
			});
		}
		return intervals;
	}

	static groupByDay(entity, time){
		var offset = new Date().getTimezoneOffset();
		offset = offset*60*1000;
		console.log("\n\noffset", offset);

		var aux = new Date();
		aux = aux.getTime() + 1000*60*60*24*time - offset;
		const now = new Date(aux);
		console.log("\n\nnow", now);



		const intervals = [];
		const day = now.getDate();
		const month = now.getMonth();

		for (var i=0; i <= 23; i++) {
			var counter = 0;
			for (var j in entity) {
				const setOffset = entity[j].created_at - offset;
				const date = new Date(setOffset);
				console.log("\n\ndate", date);
				const eventDay = date.getDate();
				const eventMonth = date.getMonth();
				const hour = date.getHours();
				if (day == eventDay && month == eventMonth && hour == i) {
					counter++;
				}
			}
			intervals.push({
				i, counter
			});
		}
		return intervals.reverse();
	}

	static groupByMonth(entity, time){
		const now = new Date();
		var actualMonth = now.getMonth();
		const intervals = [];

		actualMonth = actualMonth + time;
		if (actualMonth < 0) {
			actualMonth += 12;
		} else if (actualMonth > 11) {
			actualMonth -= 12;
		}

		let limit;
		if (actualMonth == 0 || actualMonth == 2 ||actualMonth == 4 || actualMonth == 6 || actualMonth == 7 || actualMonth == 9 || actualMonth == 11) {
			limit = 31;
		} else if (actualMonth == 1) {
			limit = 28;
		} else {
			limit = 30;
		}

		for (var i=1; i <= limit; i++){
			var counter = 0;
			for (var j in entity){
				const date = new Date(entity[j].created_at);
				const day = date.getDate();
				const month = date.getMonth();
				if (month == actualMonth && day == i) {
					counter++;
				}
			}
			intervals.push({
				i, counter
			});
		}
		return intervals.reverse();
	}
}
