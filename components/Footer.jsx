import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Your Name. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '4rem',
    padding: '1.5rem',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    color: '#555',
    fontSize: '0.9rem',
  },
};

export default Footer;
