const profile = {
	name: 'jasmine',
	age: 34,
	coords: {
		lat: 0,
		lng: 15
	},
	setAge(age: number): void {
		this.age = age;
	}
};

// profile.age = 20 

// ES2015

// destructure age
const { age }: { age: number } = profile;

// destructure lat / long 
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;