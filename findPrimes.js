async function findPrimes(start, end, chunkSize = 10000) {
    if (start < 2) start = 2;

    const totalNumbers = end - start + 1;
    let current = start;
    let processed = 0;
    let nextProgressMark = 10;

    const primes = [];
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

    async function processChunk(from, to) {
        for (let n = from; n <= to; n++) {
            if (isPrime(n)) primes.push(n);

            processed++;
        }
    }

    while (current <= end) {
        const chunkEnd = Math.min(current + chunkSize - 1, end);

        await new Promise(resolve => setTimeout(resolve, 0));
        await processChunk(current, chunkEnd);

        const progress = (processed / totalNumbers) * 100;

        if (progress >= nextProgressMark) {
            console.log(`${nextProgressMark}% завершено`);
            nextProgressMark += 10;
        }

        current = chunkEnd + 1;
    }

    const time = Date.now() - startTime;

    console.log(`Найдено простых чисел: ${primes.length}`);
    console.log(`Время выполнения: ${time} мс`);

    return primes;
}

findPrimes(1, 100000000,50000);