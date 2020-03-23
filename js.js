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

var person1 = new person("Trần", "Thiên", "Nam", "06/06/1995");
console.log(person1.fullname());
console.log(person1.personInfo());

var student1 = new student('Trần', "Thiên", "Nam", "06/06/1995", "01", "Vat Ly","Vat Ly", 6, 7, 8); 
console.log(student1.getDiemtrungbinh());
console.log(student1.thongtindiem());
console.log(student1.studentInfo());

