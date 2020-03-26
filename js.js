function person(fn, ln, gd, bd) {
	// body...
	this.fn = fn;
	this.ln = ln;
	this.gd = gd;
	this.bd = bd;
	this.fullname = function() {
		return this.fn + ' ' + this.ln;
	}
	this.personInfo = function() {
		return 'Name' + this.fullname() + '<br>Gender: ' + this.gd + '<br>Birthday: ' + this.bd;
	}
}

function student(fn, ln, gd, bd, lop, khoa, nganh, diem1, diem2, diem3) {
	this.super_ = person;
	this.super_.call(this, fn, ln, gd, bd);
	this.lop = lop;
	this.khoa = khoa;
	this.diem1 = diem1;
	this.diem2 = diem2;
	this.diem3 = diem3;
	this.getDiemtrungbinh = function() {
		return (parseFloat(this.diem1) + parseFloat(this.diem2) + parseFloat(this.diem3))/3;
	}
	this.xeploai = function() {
		if (this.getDiemtrungbinh() >= 9 && this.getDiemtrungbinh() <= 10) {
			return 'xếp loại Xuất Sắc';
		} else if (this.getDiemtrungbinh() >= 8 && this.getDiemtrungbinh() < 9) {
			return 'xếp loại Gioi';
		}
		else if (this.getDiemtrungbinh() >=7 && this.getDiemtrungbinh() < 8) {
			return 'xep loai Kha';
		}
		else if (this.getDiemtrungbinh() >= 5 && this.getDiemtrungbinh() < 7) {
			return 'xep loai Trung Binh';
		}
		else {
			return 'xep loai Yeu';
		}
		
	}
	this.studentInfo = function () {
		return 'Name' + (this.fn + ' ' + this.ln) + '<br>Gender: ' + this.gd + '<br>Birthday: ' + this.bd + '<br>Lớp: ' + 
		this.lop + '<br>Khoa: ' + this.khoa + '<br>Điểm trung bình: ' + this.getDiemtrungbinh() + '<br>Xếp loại: ' + this.xeploai();
	}
}
student.prototype.thongtindiem = function () {
	return '-Điểm môn 1: ' + this.diem1 + '	-Điểm môn 2: ' + this.diem2 + '	-Điểm môn 3: ' + this.diem3 + ' -Điểm trung bình: ' + this.getDiemtrungbinh();
}

// var person1 = new person("Trần", "Thiên", "Nam", "06/06/1995");
// console.log(person1.fullname());
// console.log(person1.personInfo());

// var student1 = new student('Trần', "Thiên", "Nam", "06/06/1995", "01", "Vat Ly","Vat Ly", 6, 7, 8); 
// console.log(student1.getDiemtrungbinh());
// console.log(student1.thongtindiem());
// console.log(student1.studentInfo());

function getInfoStudent() {
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var gender = document.getElementById('gender').value;
	var birthday = document.getElementById('birthday').value;
	var class1 = document.getElementById('class1').value;
	var faculty = document.getElementById('faculty').value;
	var majours = document.getElementById('majours').value;
	var score1 = parseFloat(document.getElementById('score1').value);
	var score2 = parseFloat(document.getElementById('score2').value);
	var score3 = parseFloat(document.getElementById('score3').value);
	
	var student1 = new student(first_name, last_name, gender, birthday, class1, faculty, majours, score1, score2, score3);
	console.log(student1.getDiemtrungbinh());
	console.log(student1.thongtindiem());
	console.log(student1.studentInfo());

	// alert(student1.getDiemtrungbinh());
	document.getElementById('info_fullname').innerHTML = first_name + " " + last_name;
	document.getElementById('info_birthday').innerHTML = birthday;
	document.getElementById('info_gender').innerHTML = gender;
	document.getElementById('info_class').innerHTML = class1;
	document.getElementById('info_faculty').innerHTML = majours;
	document.getElementById('info_avergate').innerHTML = student1.getDiemtrungbinh();
	document.getElementById('info_classsify').innerHTML = student1.xeploai();
}

function getInfoPerson() {

	var first_name_p = document.getElementById('first_name_p').value;
	var last_name_p = document.getElementById('last_name_p').value;
	var gender_p = document.getElementById('gender_p').value;
	var birthday_p = document.getElementById('birthday_p').value;
	var person1_p = new person(first_name_p, last_name_p, gender_p, birthday_p);
	console.log(person1_p.fullname());
	console.log(person1_p.personInfo());

	document.getElementById('info_fullname_p').innerHTML = person1_p.fullname();
	document.getElementById('info_birthday_p').innerHTML = birthday_p;
	document.getElementById('info_gender_p').innerHTML = gender_p;
}

