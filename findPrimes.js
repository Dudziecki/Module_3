function findPrimes(start, end) {
    if (start < 2) start = 2;
    const totalNumbers = end - start + 1;
    const chunkSize = 10000;
    let current = start;
    const primes = [];
    let checked = 0;
    const startTime = Date.now();

    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function processChunk() {
        const chunkEnd = Math.min(current + chunkSize - 1, end);
        for (let num = current; num <= chunkEnd; num++) {
            if (isPrime(num)) {
                primes.push(num);
            }
            checked++;
        }

        const progress = Math.floor((checked / totalNumbers) * 100);
        const progress10 = Math.floor(progress / 10) * 10;

        if (progress10 > 0 && progress10 % 10 === 0) {
            const alreadyPrinted = window.lastProgress || 0;
            if (progress10 > alreadyPrinted) {
                console.log(`${progress10}% завершено`);
                window.lastProgress = progress10;
            }
        }

        current = chunkEnd + 1;

        if (current <= end) {
            setTimeout(processChunk, 0);
        } else {
            const time = Date.now() - startTime;
            console.log(`Найдено простых чисел: ${primes.length}`);
            console.log(`Время выполнения: ${time} мс`);
        }
    }

    window.lastProgress = 0;
    processChunk();
}

findPrimes(1, 100000000);