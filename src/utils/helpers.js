/**
 * Generates a unique ID
 * @returns {string} A unique ID
 */
export function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  
  /**
   * Formats a date to a readable string
   * @param {Date} date - The date to format
   * @returns {string} Formatted date string
   */
  export function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }