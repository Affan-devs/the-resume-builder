document.addEventListener('DOMContentLoaded', () => {
    const repeaters = document.querySelectorAll('.repeater');

    repeaters.forEach(repeater => {
        const addButton = repeater.querySelector('.add-item') as HTMLButtonElement;
        const removeButtons = repeater.querySelectorAll('.remove-item') as NodeListOf<HTMLButtonElement>;

        const showItem = (item: HTMLElement) => item.style.display = 'block';
        const hideItem = (item: HTMLElement) => {
            item.style.display = 'none';
            setTimeout(() => generateCV(), 500);
        };

        addButton?.addEventListener('click', () => {
            const newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `<input type="text" class="text-input" value=""> <button class="remove-item">Remove</button>`;
            repeater.appendChild(newItem);
            showItem(newItem);
        });

        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const item = (event.target as HTMLElement).closest('.item')!;
    
            });
        });

        // Initialize non-empty items
        const items = repeater.querySelectorAll('.item');
    
    });
});

function generateCV() {
    // Implement the function to generate CV
}
