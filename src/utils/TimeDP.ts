type DatePrimitive = { hours: number; minutes: number; seconds: number };

export class TimeDP {
  hours: number;
  minutes: number;
  seconds: number;

  constructor(init?: Partial<DatePrimitive> | Date) {
    if (!init || init instanceof Date) {
      const initializerDate = init || new Date();

      this.hours = initializerDate.getHours();
      this.minutes = initializerDate.getMinutes();
      this.seconds = initializerDate.getSeconds();
    } else {
      const { hours = 0, minutes = 0, seconds = 0 } = init;

      const initializer = { hours, minutes, seconds };

      const isValid = this.validateTimeInitializer(initializer);

      if (!isValid) {
        throw new Error("Invalid date initializer");
      }

      this.hours = initializer.hours;
      this.minutes = initializer.minutes;
      this.seconds = initializer.seconds;
    }
  }

  private validateTimeInitializer = ({ hours, minutes, seconds }: DatePrimitive): boolean => {
    if (hours < 0 || hours > 23) {
      return false;
    }

    if (minutes < 0 || minutes > 59) {
      return false;
    }

    if (seconds < 0 || seconds > 59) {
      return false;
    }

    return true;
  };

  toString = () => {
    let dayTime = "AM";

    if (this.hours >= 12) {
      dayTime = "PM";
    }

    return `${this.formatTimeValue(this.hours)}:${this.formatTimeValue(this.minutes)}:${this.formatTimeValue(this.seconds)} ${dayTime}`;
  };

  formatTimeValue = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  static addTimeObjects = (time1: TimeDP, time2: TimeDP) => {
    const result = { hours: time1.hours, minutes: time1.minutes, seconds: time1.seconds };

    result.seconds += time2.seconds;
    if (result.seconds > 59) {
      result.minutes += 1;

      result.seconds = result.seconds % 60;
    }

    result.minutes += time2.minutes;
    if (result.minutes > 59) {
      result.hours += 1;

      result.minutes = result.minutes % 60;
    }

    result.hours += time2.hours;
    if (result.hours > 23) {
      result.hours = result.hours % 24;
    }

    return new TimeDP(result);
  };

  static substractTimeObjects = (time1: TimeDP, time2: TimeDP) => {
    const result = { hours: time1.hours, minutes: time1.minutes, seconds: time1.seconds };

    result.seconds -= time2.seconds;
    if (result.seconds < 0) {
      result.minutes -= 1;

      result.seconds = 60 - Math.abs(result.seconds);
    }

    result.minutes -= time2.minutes;
    if (result.minutes < 0) {
      result.hours -= 1;

      result.minutes = 60 - Math.abs(result.minutes);
    }

    result.hours -= time2.hours;
    if (result.hours < 0) {
      result.hours = 24 - Math.abs(result.hours);
    }

    return new TimeDP(result);
  };

  addTime = (time: TimeDP) => TimeDP.addTimeObjects(this, time);

  substractTime = (time: TimeDP) => TimeDP.substractTimeObjects(this, time);
}
