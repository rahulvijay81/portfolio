export const calculateDuration = (startDate: string, endDate: string): string => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const parseDate = (dateStr: string) => {
        if (dateStr.toLowerCase() === "present") return new Date();
        const [monthStr, yearStr] = dateStr.split(" ");
        const monthIndex = months.indexOf(monthStr);
        return new Date(parseInt(yearStr), monthIndex);
    };

    const start = parseDate(startDate);
    const end = parseDate(endDate);

    // Calculate difference in months
    let diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

    // Add 1 month to include the starting month (e.g., Oct to Oct is 1 month)
    // However, usually "Oct 2023 - Present" (if Present is Nov 2023) implies 2 months? 
    // Standard LinkedIn style often rounds or includes the current month. 
    // Let's stick to simple difference first, but often people expect inclusive.
    // If I started Oct 1st and it's Nov 1st, that's 1 month.
    // If I work Oct 2023 - Oct 2023, that's usually "1 mo".
    // So let's add 1 to the difference to be inclusive of the partial months if we treat them as full blocks.
    // Let's see the example: "Oct 2023 - Present" (Nov 2025) -> 2 yrs 1 mo.
    // Oct 2023 to Oct 2024 = 12 months (1 yr).
    // Oct 2023 to Nov 2023 = 1 month.
    // So (Nov - Oct) = 1.
    // If we want inclusive count (e.g. worked during Oct and during Nov), it might be +1.
    // Let's assume standard difference for now, but maybe +1 if we consider "Oct - Oct" as 1 month.
    // Actually, usually "Oct 2023 - Oct 2023" is 1 month.
    // 2023*12 + 9 (Oct is 9) = 24285
    // 2023*12 + 9 = 24285. Diff = 0.
    // So we should add 1 to make it 1 month.
    diffMonths += 1;

    const years = Math.floor(diffMonths / 12);
    const remainingMonths = diffMonths % 12;

    const parts = [];
    if (years > 0) {
        parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    }
    if (remainingMonths > 0) {
        parts.push(`${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`);
    }

    return parts.join(" ");
};
