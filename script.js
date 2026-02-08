let score = 0;
        let clicks = 0;
        let cps = 0;
        let autoClickRate = 0;

        const scoreEl = document.getElementById('score');
        const clicksEl = document.getElementById('clicks');
        const cpsEl = document.getElementById('cps');
        const cookieBtn = document.getElementById('cookieBtn');
        const resetBtn = document.getElementById('resetBtn');

        cookieBtn.addEventListener('click', (e) => {
            score += 1 + Math.floor(autoClickRate / 10);
            clicks++;
            updateDisplay();
            createClickAnimation(e);

            // Button feedback
            cookieBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                cookieBtn.style.transform = 'scale(1)';
            }, 50);
        });

        // Auto-clicker every 2 seconds
        setInterval(() => {
            if (autoClickRate > 0) {
                score += autoClickRate / 5;
                updateDisplay();
            }
        }, 200);

        function updateDisplay() {
            scoreEl.textContent = Math.floor(score);
            clicksEl.textContent = clicks;
            autoClickRate = clicks * 0.1;
            cpsEl.textContent = (autoClickRate / 5).toFixed(1);
        }

        function createClickAnimation(e) {
            const floatingText = document.createElement('div');
            floatingText.className = 'click-animation';
            floatingText.textContent = '+1';
            floatingText.style.left = e.clientX + 'px';
            floatingText.style.top = e.clientY + 'px';
            document.body.appendChild(floatingText);

            setTimeout(() => floatingText.remove(), 1000);
        }

        resetBtn.addEventListener('click', () => {
            score = 0;
            clicks = 0;
            autoClickRate = 0;
            updateDisplay();
        });

        updateDisplay();