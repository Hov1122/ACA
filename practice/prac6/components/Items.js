export const Items = (nums) => {
    const container = document.createElement('div');
    
    container.innerHTML = `
        ${nums.map(num => `<div>${num}</div>`).join("")}
    `

    return container;
}