document.addEventListener("DOMContentLoaded", function() {
    const codeContainers = document.querySelectorAll('.code-animation-container');
    let currentCodeIndex = 0;

    const codes = [
        [
            '#include life.h',
            '// algorithm of success',
            'while (!Success) {',
            '  try again();',
            '  if (Success) {',
            '    improve();',
            '  }',
            '}'
        ],
        [
            'if(tired){',
            '    takeNap();',
            '    code();',
            '    repeat();',
            '}'
        ]
    ];

    function addCodeLine(line, container) {
        const codeLine = document.createElement('div');
        codeLine.textContent = line;
        codeLine.style.color = 'yellow'; // Set text color to yellow
        container.appendChild(codeLine);
        container.scrollTop = container.scrollHeight;
    }

    function addCodeLines(lines, container) {
        lines.forEach((line, index) => {
            setTimeout(() => {
                addCodeLine(line, container);
            }, index * 1000);
        });
    }

    function cycleCode() {
        const currentCodeContainer = codeContainers[currentCodeIndex];
        const nextCodeIndex = (currentCodeIndex + 1) % codeContainers.length;
        const nextCodeContainer = codeContainers[nextCodeIndex];

        addCodeLines(codes[currentCodeIndex], currentCodeContainer);

        setTimeout(() => {
            currentCodeContainer.innerHTML = ''; // Clear current code after display
            currentCodeIndex = nextCodeIndex;
            cycleCode(); // Recursively call for the next code
        }, codes[currentCodeIndex].length * 1000);
    }

    cycleCode(); // Start the code cycling process
});
