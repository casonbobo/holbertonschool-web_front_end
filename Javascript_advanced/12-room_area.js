var roomDimensions = {
    width: 50,
    length: 100,
    getArea: () => this.width * this.length
};

var boundGetArea = roomDimensions.getArea.bind(roomDimensions);
